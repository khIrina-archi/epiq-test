// components/PostRow.tsx
import React from 'react'

import type { PostRowProps } from './types'

export function PostRow({ post, onUpdate, onDelete }: PostRowProps) {
  const handleOnUpdate = () => onUpdate(post.id)
  const handleOnDelete = () => onDelete(post.id)

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-slate-700">{post.id}</td>
      <td className="px-6 py-4 text-sm text-slate-800">{post.title}</td>
      <td className="px-6 py-4 text-sm text-slate-600">{post.body}</td>
      <td className="px-6 py-4 text-right space-x-2">
        <button
          onClick={handleOnUpdate}
          className="px-3 py-1.5 rounded-lg border border-gray-200 text-slate-700 hover:bg-gray-50 transition"
        >
          Update
        </button>
        <button
          onClick={handleOnDelete}
          className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
