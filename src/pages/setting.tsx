import React, { useEffect, useState } from "react"
import List from "../components/list.tsx"
import { useDispatch, useSelector } from "react-redux"
import { getPostsStore } from "../store/slices/posts.ts"
import { createDataTree, flattenDataTree } from "../utils/index.ts"
import { useNavigate } from "react-router-dom"

interface Post {
  id: number
  title: string
  parentId: number | null
  body: string
  children?: Post[]
}

const Setting: React.FC = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: any) => state.posts)
  const navigate = useNavigate()

  const [addValue, setAddValue] = useState<{ id: string; title: string }>({
    id: "",
    title: "",
  })
  const [moveValue, setMoveValue] = useState<{ id: string; parentId: string }>({
    id: "",
    parentId: "",
  })
  const [flattenData, setFlattenData] = useState<Post[]>([])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddValue({ ...addValue, title: e.target.value })
  }

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddValue({ ...addValue, id: e.target.value })
  }
  const handleChangeMoveId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoveValue({ ...moveValue, id: e.target.value })
  }

  const handleChangeParentId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoveValue({ ...moveValue, parentId: e.target.value })
  }

  useEffect(() => {
    if (data) {
      setFlattenData(flattenDataTree(data))
    }
  }, [data])

  const submitCategory = () => {
    setAddValue({ id: "", title: "" })

    const arr: Post[] = [
      ...flattenData,
      {
        id: flattenData.length + 1,
        title: addValue.title,
        parentId: +addValue.id,
        body: "",
      },
    ]

    const editedArr: Post[] = [...data]

    if (!addValue.id) {
      editedArr.push({
        id: data.length + 1,
        title: addValue.title,
        parentId: null,
        children: [],
        body: "",
      })
      dispatch(getPostsStore(editedArr))
    } else {
      dispatch(getPostsStore(createDataTree(arr)))
    }
  }

  const handleSubmitMovement = () => {
    setMoveValue({ id: "", parentId: "" })
    const editedArr = flattenDataTree(data).map((item) => {
      if (item.id === +moveValue.id) {
        return { ...item, parentId: +moveValue.parentId }
      } else {
        return item
      }
    })

    dispatch(getPostsStore(createDataTree(editedArr)))
  }

  const handleToCategory = () => {
    navigate("/categories")
  }

  return (
    <>
      <button
        className="bg-white w-[220px] disabled:text-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-7"
        onClick={handleToCategory}
      >
        Back To Category
      </button>
      <div className="m-6 flex items-center justify-between bg-blue-100 border-[1px] border-solid border-gray-700 rounded-md p-6 ">
        <div className="w-2/3 flex justify-start items-center">
          <input
            type="text"
            className="py-2 px-2 border-[1px] border-solid border-gray-700 rounded-[4px] mb-1"
            value={addValue.title}
            onChange={handleChangeTitle}
            placeholder="Category Title"
          />
          <input
            type="text"
            className="py-2 ml-4 border-[1px] border-solid border-gray-700 px-2 rounded-[4px] mb-1"
            value={addValue.id}
            onChange={handleChangeId}
            placeholder="Parent Id "
          />
        </div>
        <button
          className="bg-white w-[220px] disabled:text-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          disabled={!addValue.title}
          onClick={submitCategory}
        >
          Add Category{" "}
        </button>
      </div>
      <div className="m-6 flex items-center justify-between bg-blue-100 border-[1px] border-solid border-gray-700 rounded-md p-6 ">
        <div className="w-2/3 flex justify-start items-center">
          <input
            type="text"
            className="py-2 px-2 border-[1px] border-solid border-gray-700 rounded-[4px] mb-1"
            value={moveValue.id}
            onChange={handleChangeMoveId}
            placeholder="moveable Id"
          />
          <input
            type="text"
            className="py-2 ml-4 border-[1px] border-solid border-gray-700 px-2 rounded-[4px] mb-1"
            value={moveValue.parentId}
            onChange={handleChangeParentId}
            placeholder="Parent Id "
          />
        </div>
        <button
          className="bg-white w-[220px] disabled:text-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          disabled={!moveValue.id || !moveValue.parentId}
          onClick={handleSubmitMovement}
        >
          Change Category{" "}
        </button>
      </div>
      {data ? (
        <List />
      ) : (
        <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
          <span className="sr-only">Loading...</span>
          <div className="h-5 w-5 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 bg-blue-900 rounded-full animate-bounce"></div>
        </div>
      )}
    </>
  )
}

export default Setting
