import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Mapofthis from "./pages/userprofile";
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
        path: "/Write",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
  {
    path:"/user/:id",
    element:<Mapofthis/>
  }
    ]
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  }
]);

function App() {
  return (
    <div className=" ">
          <RouterProvider router={router}/>
       </div>
  )
}

export default App

// App.js
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Write from "./pages/Write";
// import Single from "./pages/Single";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
// import Mapofthis from "./pages/userprofile";
// function App() {
//   return (
//     <div className="">
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Write" element={<Write />} />
//         <Route path="/post/:id" element={<Single />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/Mapofthis" element={<Mapofthis />} />
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App