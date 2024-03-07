import { GET_CLOUDINARY_IMAGE } from "../constants";

const RestaurantCard = (props) => {
    return <div className={`p-3 m-3 w-[265px] h-[384px] rounded-md ${props.cardColor} transition-all`}>
        <div className="w-64"> <img className="w-60 h-60 rounded-md" src={GET_CLOUDINARY_IMAGE+props.cloudinaryImageId} /> </div>
        <h3> {props.name} </h3>
        <h3 className="truncate">{props.cuisines.join(", ")}</h3>
        <h3> {props.locality} </h3>
        <p> {props.avgRating}/5 </p>
    </div>
}

export default RestaurantCard;