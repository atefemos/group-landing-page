import React from "react"
import List from "../components/list.tsx"
import { useSelector } from "react-redux"
import { RootState } from "../store/types.ts"
import { useNavigate } from "react-router-dom"

const Categories: React.FC = () => {
  const navigate = useNavigate()

  const { data } = useSelector((state: RootState) => state.posts)

  const handleToSetting = () => {
    navigate("/setting")
  }

  return (
    <div>
      <button
        className="bg-white w-[220px] disabled:text-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-7"
        onClick={handleToSetting}
      >
        Back To Setting
      </button>
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
    </div>
  )
}

export default Categories
