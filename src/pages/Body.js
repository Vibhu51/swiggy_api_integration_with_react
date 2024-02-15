import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import useRestaurantList from "../custom_hooks/useRestauantList";
import useOnline from "../custom_hooks/useOnline";
import Shimmer from "../components/Shimmer";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantList, isLoading] = useRestaurantList();

    const filterRestaurant = (searchText, restaurantList) => restaurantList.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

    return  (<>
        <div className="mx-auto w-1/2 my-5">
            <input className="px-4 border-2 border-black" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /> 
            {/* <button className="px-4" onClick={() => {
                const data = restaurantList.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurantList(data);
            }}> Search </button> */}
        </div>
        <div className="flex flex-wrap px-8">
        {/* will add shimmer ui later */}
        {isLoading && Array.from(Array(10).keys()).map(d => <Shimmer key={d} />)}
        {!isLoading && filterRestaurant(searchText, restaurantList).map(restaurant => {
            return <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}>
                <RestaurantCard {...restaurant.info} />
            </Link>
        })}
        </div>
    </>);
}

export default Body;