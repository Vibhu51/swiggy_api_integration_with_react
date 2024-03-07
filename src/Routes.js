import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Body from "./pages/Body";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RestaurantMenu from "./pages/RestaurantMenu";
import Header from "./components/Header";
import appContext from "./Context";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./redux/reduxStore"
import Cart from "./pages/Cart";


const AppLayout = () => {
    const [theme, setTheme] = useState(true);

    return <Provider store={appStore}>
        <appContext.Provider value={{theme, setTheme}}>
        <Header />
        <Outlet />
    </appContext.Provider>
    </Provider>
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
            path: "/cart",
            element: <Cart />,
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
