import React from "react"
import { useNavigate } from "react-router-dom"

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <p className="my-2">چیزی یافت نشد!</p>
      <button
        className="bg-white h-10 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => navigate("")}
      >
        صفحه اصلی
      </button>
    </div>
  )
}

export default NotFound
