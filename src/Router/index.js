import { useRoutes } from "react-router-dom"
import MainPage from "../pages/mainPage.tsx"
import Categories from "../pages/categories.tsx"
import Setting from "../pages/setting.tsx"
import Notfound from "../pages/notFound.tsx"
import PostDetail from "../pages/postDetail.tsx"

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <MainPage />,
    },
    {
      path: "setting",
      element: <Setting />,
    },
    {
      path: "categories",
      children: [
        { path: "", element: <Categories /> },
        { path: ":id", element: <PostDetail /> },
      ],
    },

    { path: "*", element: <Notfound /> },
  ])
}
