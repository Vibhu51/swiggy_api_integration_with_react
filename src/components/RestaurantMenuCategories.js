import { useState } from "react";
import { GET_CLOUDINARY_IMAGE } from "./../constants";

const RestaurantMenuCategoriesList = (props) => {
    window.console.log(props);
    const {name, imageId, price, isBestseller, description, defaultPrice, isVeg} = props;
    return <div className="flex justify-between w-full m-1 border-gray-300 p-2 border-b">
        <div className="w-10/12">
            <p className="text-lg">{name} {isVeg ? "🫑" : "🍗"}</p>
            <p>{description}</p>
            <p> ₹{ price ? price/100 : defaultPrice/100}</p>
        </div>
        <div>
        <img className="w-20 h-20 " src={GET_CLOUDINARY_IMAGE+imageId} />
        </div>
    </div>;
}

const RestaurantMenuCategories = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const {index, activeIndex, itemCards, onClick}  = props;
    return (<div className="transition-all w-full">
        <div className="m-2 p-2 border border-black w-full flex justify-between shadow-md cursor-pointer" onClick={onClick}>
            <span>{props?.title + ` (${props?.itemCards?.length})`}</span>
            <span>{!showDropDown ? "⬇️" : "⬆️"}</span>
        </div>
        {index === activeIndex && itemCards?.map(itemCard => <RestaurantMenuCategoriesList key={itemCard?.card?.info?.name} {...itemCard?.card?.info}/>)}
    </div>)
}

export default RestaurantMenuCategories;