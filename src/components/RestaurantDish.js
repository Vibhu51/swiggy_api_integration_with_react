import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { GET_CLOUDINARY_IMAGE } from "./../constants";

const RestaurantDish = (props) => {
    const {name, imageId, price, isBestseller, description, defaultPrice, isVeg} = props;
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addItem(props))
    }
    return <div className="flex justify-between w-full m-1 border-gray-300 p-2 border-b">
        <div className="w-10/12">
            <p className="text-lg">{name} {isVeg ? "🫑" : "🍗"}</p>
            <p>{description}</p>
            <p> ₹{ price ? price/100 : defaultPrice/100}</p>
        </div>
        <div>
        <div className="relative">
            <img className="w-28 h-28 " src={GET_CLOUDINARY_IMAGE+imageId} />
            <button data-testid="addButton" onClick={handleClick} className="absolute bottom-1 left-[35%] text-white bg-black rounded-md p-1 hover:scale-75 transition-all">Add +</button>
        </div>
        </div>
    </div>;
}

export default RestaurantDish;