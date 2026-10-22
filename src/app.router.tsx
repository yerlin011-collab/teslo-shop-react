import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { DashBoardPage } from "./admin/pages/dashboard/DashBoardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { lazy } from "react";
import { AdminRoute, NotAutenticatedRoute } from "./components/routes/ProtectedRoutes";


const AuthLayout = lazy(()=>import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(()=>import('./admin/layouts/AdminLayout'));


export const appRouter= createBrowserRouter([


  //Main Routes

    {

        path: '/',
        element: <ShopLayout/>,
        children: [

      {
        index: true,
        element: <HomePage/>
      },

      {
        path: 'product/:idSlug',
        element: <ProductPage/>
      },
      {
        path: 'gender/:gender',
        element: <GenderPage/>
      },

     ]

    },

        // Auth routes
    {
        path: '/auth',
        element: 

        <NotAutenticatedRoute>
          <AuthLayout/>
        </NotAutenticatedRoute>,

        children: [{

        index: true,
        element: <Navigate to='/auth/login'/>

        },

        {
          path: 'login',
          element: <LoginPage/>
        },

        {
          path: 'register',
          element: <RegisterPage/>
        },


        ]
    },


    // Admin routes
    {
        path: '/admin',
        element: 


        <AdminRoute>
          <AdminLayout/>
        </AdminRoute>,

        children: [{

        index: true,
        element: <DashBoardPage/>,

        },

        {
          path: 'products',
          element: <AdminProductsPage/>
        },

        {
          path: 'products/:id',
          element: <AdminProductPage/>
        },


        ]
    },

     {
        path: '*',
        element: <Navigate to='/'/>
    },


])