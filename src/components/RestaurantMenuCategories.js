import { useState, useContext } from "react";
import appContext from "../Context";

import RestaurantDish from "./RestaurantDish";

const RestaurantMenuCategories = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const {theme} = useContext(appContext);
    const {index, activeIndex, itemCards, onClick}  = props;
    return (<div className="transition-all w-full">
        <div className={`m-2 p-2 border border-black w-full flex justify-between shadow-md cursor-pointer ${theme ? "bg-white" : "bg-gray-700"}`} onClick={onClick}>
            <span>{props?.title + ` (${props?.itemCards?.length})`}</span>
            <span>{index !== activeIndex ? "⬇️" : "⬆️"}</span>
        </div>
        {index === activeIndex && itemCards?.map(itemCard => <RestaurantDish key={itemCard?.card?.info?.name} {...itemCard?.card?.info}/>)}
    </div>)
}

export default RestaurantMenuCategories;