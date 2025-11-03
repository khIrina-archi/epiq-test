import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { crudFetcher, mutationFetcher, useAppSelector } from '../app/index'
import { useCallback } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export function DataTablePage() {
  const queryClient = useQueryClient()
  const rowsCount = useAppSelector((state) => state.config.rowsCount)

  // --- READ ---
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () =>
      crudFetcher<Post[]>('https://jsonplaceholder.typicode.com/posts')
  })

  const onSuccessCallback = useCallback(
    () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    [queryClient]
  )

  // --- CREATE ---
  const createPost = useMutation<Post, unknown, Omit<Post, 'id'>>({
    mutationFn: mutationFetcher<Omit<Post, 'id'>, Post>(
      'https://jsonplaceholder.typicode.com/posts',
      'post'
    ),
    onSuccess: onSuccessCallback
  })

  // --- UPDATE ---
  const updatePost = useMutation<Post, unknown, Partial<Post> & { id: number }>(
    {
      mutationFn: ({ id, ...updated }) =>
        mutationFetcher<Partial<Post>, Post>(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          'put'
        )(updated),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  )

  // --- DELETE ---
  const deletePost = useMutation<void, unknown, number>({
    mutationFn: (id) =>
      mutationFetcher<undefined, void>(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        'delete'
      )(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
  })

  // Operations
  const handleAdd = () =>
    createPost.mutate({ title: 'New Post', body: 'Content', userId: 1 })

  const handleUpdate = (id: number) =>
    updatePost.mutate({ id, title: 'Updated Title', body: 'Updated Content' })

  const handleDelete = (id: number) => deletePost.mutate(id)

  return (
    <div>
      {isLoading
        ? 'Loading...'
        : posts?.slice(0, rowsCount).map((p) => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              <p>
                {p.id}. {p.title}
              </p>
              <button onClick={() => handleUpdate(p.id)}>Update</button>
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          ))}
      <button onClick={handleAdd}>Add New Post</button>
    </div>
  )
}

export default DataTablePage
