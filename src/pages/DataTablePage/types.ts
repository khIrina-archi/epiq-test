export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostRowProps {
  post: Post
  onUpdate: (id: number) => void
  onDelete: (id: number) => void
}
