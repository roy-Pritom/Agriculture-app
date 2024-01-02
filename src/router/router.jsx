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
import AllSubCategory from "../pages/Dashboard/AllSubCategory";
import AllCategory from "../pages/Dashboard/AllCategory";
import CreateProduct from "../pages/Dashboard/CreateProduct/CreateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Product from "../pages/Home/Product/Product";
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
            path:'/products',
            element:<Product></Product>
        },
        {
            path:'/feedback',
            element:<Feedback></Feedback>
        },
        {
          path:'/details/:id',
          element:<ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`http://localhost:5000/api/v1/product/${params.id}`)
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
                element:<Products></Products>,
                loader:()=>fetch('http://localhost:5000/api/v1/get-products')
            },
            {
                path:'sliders',
                element:<Sliders></Sliders>
            },
            {
                path:'allSub',
                element:<AllSubCategory></AllSubCategory>,
                loader:()=>fetch('http://localhost:5000/api/v1/get-SubCategory')
            },
            {
                path:'allCategory',
                element:<AllCategory></AllCategory>,
                loader:()=>fetch('http://localhost:5000/api/v1/get-category')
            },
            {
                path:'create-product',
                element:<CreateProduct></CreateProduct>,
                loader:()=>fetch('http://localhost:5000/api/v1/get-SubCategory')
            },
      
          ]
     }
  ]);

  export default router;