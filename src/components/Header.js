import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-purple-100">
            <img className="w-20 h-20" src="data:image/png;base64,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" alt="App image" />
            <ul className="flex justify-evenly items-center">
                <li className="px-4">
                   <Link to="/">Home</Link> 
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-4">
                    <Link>cart</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;