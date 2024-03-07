import { useContext, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../custom_hooks/useRestauantList";
import useOnline from "../custom_hooks/useOnline";
import Shimmer from "../components/Shimmer";
import appContext from "../Context";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantList, isLoading] = useRestaurantList();
    const isOnline = useOnline();
    const {theme} = useContext(appContext);
    let darkThemeScheme = "bg-black text-white";
    let lightThemeScheme = "bg-light-100 text-black";

    const filterRestaurant = (searchText, restaurantList) => restaurantList.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

    if(!isOnline) return <h1>Seems like you are offline!</h1>

    return  (<div className={`m-0 p -0 ${theme ? lightThemeScheme : darkThemeScheme}`}>
        <div className="mx-auto w-1/2 py-5">
            <input className="px-4 border-2 border-black" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /> 
        </div>
        <div className="flex flex-wrap px-8">
        {isLoading && Array.from(Array(10).keys()).map(d => <Shimmer key={d} cardColor={theme ? "bg-gray-100" : "bg-gray-800"}/>)}
        {!isLoading && filterRestaurant(searchText, restaurantList).map(restaurant => {
            return <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}>
                <RestaurantCard {...restaurant.info} cardColor={theme ? "bg-gray-100" : "bg-gray-800"} />
            </Link>
        })}
        </div>
    </div>);
}

export default Body;