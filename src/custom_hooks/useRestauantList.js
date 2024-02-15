import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANTS_URL } from "../constants";

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getRestaurantList();
    }, []);

    async function getRestaurantList() {
        const res = await fetch(SWIGGY_RESTAURANTS_URL);
        const result = await res.json();
        setRestaurantList(result?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setIsLoading(false)
    }

    return [restaurantList, isLoading];
}

export default useRestaurantList;