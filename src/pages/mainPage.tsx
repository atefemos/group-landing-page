import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getPostsStore } from "../store/slices/posts.ts"
import { createDataTree } from "../utils/index.ts"

const MainPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRoute = (path: string): void => {
    navigate(path)
  }

  async function getPosts(): Promise<void> {
    const response = await fetch("https://oe8qz.wiremockapi.cloud/json/1")
    const post = await response.json()

    dispatch(getPostsStore(createDataTree(post)))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="flex w-full h-[100vh] items-center justify-evenly">
      <button
        className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => handleRoute("categories")}
      >
        Categories
      </button>
      <button
        className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => handleRoute("setting")}
      >
        Setting
      </button>{" "}
    </div>
  )
}

export default MainPage
