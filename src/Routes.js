import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Body from "./pages/Body";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Header from "./components/Header";


const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
    </>
}

const routes = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <AboutUs />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
        }
    ]

}])


export default routes;
