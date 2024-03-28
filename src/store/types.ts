// Define the shape of the post entity
interface Post {
  id: number
  title: string
  parentId: number
  body: string
  children: string
}

// Define the shape of the Redux store state
interface RootState {
  posts: {
    data: Post[] // Array of posts
    loading: boolean // Loading state
    error: string | null // Error message
  }
}

export { RootState, Post }
