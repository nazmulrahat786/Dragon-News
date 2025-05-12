import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home Layout/Pages/Home";
import CategoryNews from "../Components/Home Layout/CategoryNews";
import Login from "../Components/Home Layout/Pages/Login";
import Register from "../Components/Home Layout/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/Home Layout/Pages/NewsDetails";
import PrivetRoute from "../provider/PrivetRoute";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

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
                    element: <CategoryNews></CategoryNews>
                    ,
                    loader:()=>fetch("/news.json"),
                    hydrateFallbackElement: <Loading></Loading>
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
            path: "/news-details/:id",
            element: <PrivetRoute>
                <NewsDetails></NewsDetails>
            </PrivetRoute>
            ,

            loader: ()=> fetch("/news.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: "/*",
            element: <Error></Error>,
        },
    ]
)
export default router;