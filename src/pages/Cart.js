import { useSelector } from "react-redux"
import RestaurantDish from "../components/RestaurantDish";

export default Cart = (props) => {
    const items = useSelector((store) => store.cart.items);
    console.log(items);
    return <div className="m-4 p-4">
        <h1 className="text-center text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto p-auto">
        {items.map((item, key) => <RestaurantDish key={key} {...item} />)}
        </div>
    </div>;
};