import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useAppSelector } from '../../app/hooks'
import { cn } from '../../lib/utils'
import { PostRow } from './PostRow'
import {
  createPostApi,
  deletePostApi,
  fetchPosts,
  updatePostApi
} from './helpers'
import type { Post } from './types'

export function DataTablePage() {
  const rowsCount = useAppSelector((s) => s.config.rowsCount)
  const queryClient = useQueryClient()

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 2
  })

  const handleOnCreatePost = () => createMutation.mutate()
  const handleOnUpdatePost = (id: number) => updateMutation.mutate(id)
  const handleOnDeletePost = (id: number) => deleteMutation.mutate(id)

  const handleOnSuccess = () =>
    queryClient.invalidateQueries({ queryKey: ['posts'] })

  const createMutation = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
  })
  const updateMutation = useMutation({
    mutationFn: (id: number) => updatePostApi(id),
    onSuccess: handleOnSuccess
  })
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePostApi(id),
    onSuccess: handleOnSuccess
  })

  return (
    <section className="section">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1>Data Table</h1>
          <p>
            Showing first <span className="font-medium">{rowsCount}</span> rows
          </p>
        </div>
        <button
          onClick={handleOnCreatePost}
          disabled={createMutation.isPending}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition',
            createMutation.isPending
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          )}
        >
          {createMutation.isPending ? 'Creating...' : 'Add New Post'}
        </button>
      </div>

      <div className="card overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center text-slate-500">Loading posts…</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                  Body
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {posts?.slice(0, rowsCount).map((p) => (
                <PostRow
                  key={p.id}
                  post={p}
                  onUpdate={handleOnUpdatePost}
                  onDelete={handleOnDeletePost}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default DataTablePage
