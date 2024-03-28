import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { flattenDataTree } from "../utils/index.ts"

interface Post {
  id: number
  title: string
  parentId: number | null
  body: string
  children?: Post[]
}

const PostDetail: React.FC = () => {
  const { id } = useParams()
  const { data } = useSelector((state: any) => state.posts)

  const [item, setItem] = useState<Post | undefined>()

  useEffect(() => {
    id && setItem(flattenDataTree(data).find((item) => item.id === +id))
  }, [])

  return (
    <div className="m-6 flex flex-col items-start justify-between bg-blue-100 border-[1px] border-solid border-gray-700 rounded-md p-6 ">
      <h3 className="font-bold mb-4">{item?.title}</h3>
      <p>{item?.body}</p>
    </div>
  )
}

export default PostDetail
