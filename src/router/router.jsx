import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
     {
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
          ]
     }
  ]);

  export default router;