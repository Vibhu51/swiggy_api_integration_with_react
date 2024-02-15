import { GET_CLOUDINARY_IMAGE } from "../constants"

const DishCard = ({imageId, name, description, price, isVeg}) => {
    return <div className="dish-card">
        <img src={GET_CLOUDINARY_IMAGE + imageId} width="200px" height="200px" />
        <div>
            <h1> {name} </h1>
            <h2> {description} </h2>
            <h3> {isVeg ? "Veg" : "Non-veg"} </h3>
            <h4> {price/100} </h4>
        </div>
    </div>
}

export default DishCard;