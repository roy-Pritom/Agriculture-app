import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Category from "../pages/Dashboard/Category";
import SubCategory from "../pages/Dashboard/SubCategory";
import Products from "../pages/Dashboard/Products";
import Sliders from "../pages/Dashboard/Sliders";
import Dashboard from "../layout/DashBoard";
import AllProducts from "../pages/Home/AllProducts/AllProducts";
import Feedback from "../pages/Home/Feedback/Feedback";



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'feedback',
          element: <Feedback></Feedback>
        },
        {
          path: 'allproducts',
          element: <AllProducts></AllProducts>
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
     },
     {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'category',
                element:<Category></Category>
            },
            {
                path:'sub-category',
                element:<SubCategory></SubCategory>
            },
            {
                path:'products',
                element:<Products></Products>
            },
            {
                path:'sliders',
                element:<Sliders></Sliders>
            },
          ]
     }
  ]);

  export default router;