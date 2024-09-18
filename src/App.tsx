import Home from "./pages/home/home"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Login from "./pages/login/login";

import "./styles/global.scss"

function App() {

  const Layout = () => (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'products',
          element: <Products />
        }
      ]
    }, 
    {
      path: 'login',
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} ></RouterProvider>

}

export default App
