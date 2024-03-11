import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {GET_CLOUDINARY_IMAGE } from "../constants";
import Loader from "../components/Loader";
import RestaurantMenuCategories from "../components/RestaurantMenuCategories";
import useRestaurantMenuList from "../custom_hooks/useRestaurantMenuList";
import appContext from "../Context";

const RestaurantMenu = () => {
    const obj = useParams();
    const [foodMenu, isLoading, info] = useRestaurantMenuList(obj?.resId)
    const [activeIndex, setActiveIndex] = useState(0);
    const {theme} = useContext(appContext);
    let darkThemeScheme = "bg-black text-white";
    let lightThemeScheme = "bg-light-100 text-black";
    const setAccordionIndexToActive = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }
    
    return <>
        {!isLoading && <div className={theme ? lightThemeScheme : darkThemeScheme}>
        <div className="restaurant-menu">
            <div className="mx-auto w-9/12 flex flex-col items-center">
                <img src={GET_CLOUDINARY_IMAGE + info.cloudinaryImageId} width="250px" height="230px" />
                <h1 className="font-bold text-xl">{info?.name}</h1>
                <h3 className="truncate text-xl ">{info.cuisines.join(", ")}</h3>
                <h2 className="text-md"> {info.locality} {info.areaName} </h2>
                <h2> {info.avgRating}/5 </h2>
                <h2> {info.costForTwoMessage} </h2>
                
            </div>
            <div className="mx-auto w-9/12 flex flex-col items-center">
                {
                    foodMenu.map((categories, index) => <RestaurantMenuCategories {...categories?.card?.card} key={categories?.card?.card?.title} index={index} activeIndex={activeIndex} onClick={() => setAccordionIndexToActive(index)} />)
                }
            </div>
        </div>
    </div>}
    {isLoading && <Loader />}
    </>
}

export default RestaurantMenu;