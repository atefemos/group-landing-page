import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostState {
  data: any[];
}

const initialState: PostState = {
  data: [],
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsStore: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPostsStore } = postSlice.actions

export default postSlice.reducer
