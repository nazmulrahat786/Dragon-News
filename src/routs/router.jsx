import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home Layout/Pages/Home";
import CategoryNews from "../Components/Home Layout/CategoryNews";
import Login from "../Components/Home Layout/Pages/Login";
import Register from "../Components/Home Layout/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader:()=>fetch("/news.json")
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
               { path: "/auth/login",
                element: <Login></Login>},
               { path: "/auth/register",
                element: <Register></Register>},

            ]
        },
        {
            path: "/news",
            element: <h1>News</h1>,
        },
        {
            path: "/*",
            element: <h1>error</h1>,
        },
    ]
)
export default router;