import { configureStore } from "@reduxjs/toolkit"
import { postSlice } from "./slices/posts.ts"

export default configureStore({
  reducer: { posts: postSlice.reducer },
})
