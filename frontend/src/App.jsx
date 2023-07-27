import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const Layout=()=>{
  return(
  <>
     <Navbar/>
     <Outlet/>
     <Footer/>
  </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Writer",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
    ]
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div className=" ">
          <RouterProvider router={router}/>
       </div>
  )
}

export default App
