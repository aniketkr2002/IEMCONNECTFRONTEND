
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductListPage from "./pages/ProductList/ProductListPage";
import Layout from "./pages/layout/Layout"
import AddProduct from "./pages/addProduct/AddProduct";
import MyProduct from "./pages/myProduct/Myproduct";
import LoginPage from "./pages/login/loginPage";
import Register from "./pages/register/register";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/product",
          element: <ProductListPage/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/add",
          element: <AddProduct/>
        },
        {
          path: "/myproduct",
          element: <MyProduct/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
