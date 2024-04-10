import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Success from "../pages/Success";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },        {
                path: "/success",
                element: <Success />,
            }

        ],
    },
]);
