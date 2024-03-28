import React, { useState } from "react"
import DeleteIcon from "../assets/images/delete.svg"
import TickIcon from "../assets/images/tick.svg"
import EditIcon from "../assets/images/edit.svg"
import { useDispatch, useSelector } from "react-redux"
import { getPostsStore } from "../store/slices/posts.ts"
import { flattenDataTree, createDataTree } from "../utils/index.ts"
import { useNavigate } from "react-router-dom"

interface Post {
  id: number
  title: string
  parentId: number | null
  body: string
  children?: Post[]
}

interface ListProps {
  title: string
  id: number
}

const List: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector((state: any) => state.posts)

  const handleToDetail = (id) => {
    navigate(`/categories/${id}`)
  }

  const RenderInput: React.FC<ListProps> = ({ title, id }) => {
    const [editable, setEditable] = useState(false)
    const [editTitle, setEditTitle] = useState(title)

    const handleDelete = (id: number) => {
      const editedArr = flattenDataTree(data).filter((item) => item.id !== id)
      dispatch(getPostsStore(createDataTree(editedArr)))
    }

    const handleEditTitle = (id: number) => {
      const editedArr = flattenDataTree(data).map((item) => {
        if (item.id !== id) {
          return item
        } else {
          return {
            ...item,
            title: editTitle,
          }
        }
      })
      dispatch(getPostsStore(createDataTree(editedArr)))
      setEditable(false)
    }

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTitle(e.target.value)
    }

    return (
      <div className="flex justify-between items-center w-1/2 border-b-[1px] border-solid border-gray-400">
        {editable ? (
          <>
            <input
              type="text"
              className="py-1 px-2 rounded-sm mb-1"
              value={editTitle}
              onChange={(e) => handleChangeTitle(e)}
            />
          </>
        ) : (
          <p
            className="font-extrabold pb-2 cursor-pointer"
            onClick={() => handleToDetail(id)}
          >
            {title} - (id : {id})
          </p>
        )}
        <div className="flex items-center justify-between w-10">
          <img
            src={editable ? TickIcon : EditIcon}
            alt="-"
            className="w-4 cursor-pointer"
            onClick={() => (editable ? handleEditTitle(id) : setEditable(true))}
          />
          <img
            src={DeleteIcon}
            alt="-"
            className="w-4 cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    )
  }

  const handleMenu = (children: Post[] | undefined, level = 0) => {
    return children?.map(({ children, title, id }) => {
      if (!children?.length) {
        return (
          <ul key={id} className="mb-3">
            <li key={id}>
              <p className="cursor-pointer" onClick={() => handleToDetail(id)}>
                {title} - (id : {id})
              </p>
            </li>
          </ul>
        )
      }
      return (
        <ul>
          <RenderInput title={title} id={id} />
          <li
            className={`${!level ? "font-light text-gray-600 ml-2" : "ml-6"}`}
            key={id}
          >
            {handleMenu(children, 1)}
          </li>
        </ul>
      )
    })
  }

  return (
    <div className="m-6 bg-blue-100 border-[1px] border-solid border-gray-700 rounded-md p-6 ">
      {handleMenu(data)}
    </div>
  )
}

export default List
