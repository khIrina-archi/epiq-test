import type { Post } from "./types"

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}posts`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function createPostApi(): Promise<Post> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'New Post',
      body: 'Generated content',
      userId: 1
    })
  })
  return res.json()
}

export async function updatePostApi(id: number): Promise<Post> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Updated Title', body: 'Updated content' })
  })
  return res.json()
}

export async function deletePostApi(id: number): Promise<void> {
  await fetch(`${import.meta.env.VITE_BASE_URL}posts/${id}`, {
    method: 'DELETE'
  })
}
