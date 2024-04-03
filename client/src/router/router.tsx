import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import UpdateAddress from "../pages/UpdateAddress";


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
                path: "/update-address",
                element: <UpdateAddress />,
            },

        ],
    },
]);
