import { GET_SWIGGY_RESTAURANT_DETAIL } from "../constants";
import {useState, useEffect} from "react";

const useRestaurantMenuList = (resId) => {
    const [foodMenu, setFoodMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    async function getRestaurantDetails() {
        const url = GET_SWIGGY_RESTAURANT_DETAIL+resId;
        const res = await fetch(url);
        const data = await res.json();
        const info = data.data.cards[0]?.card?.card?.info;
        const foodMenu = data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(li => li?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setInfo(info);
        setFoodMenu(foodMenu);
        setIsLoading(false)
    }

    return [foodMenu, isLoading, info];
}

export default useRestaurantMenuList;