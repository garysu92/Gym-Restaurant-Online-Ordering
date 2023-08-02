import { Link } from "react-router-dom"
import img from "../assets/images/tmp.png"
import cart from "../assets/images/cart.svg"

export const Header = () => {
    return (
        <nav id="header" className="text-gray-500 border-solid">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrap pl-4 flex items-center">
                    <Link to="/">
                        <img src={img} alt="Logo" className="w-40 h-40"></img>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10 border-solid">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <Link to="#about" reloadDocument>
                        <div>About</div>
                    </Link>
                </div>
                <div className="flex items=center justify-center space-x-4 border-solid">
                    <Link to="/cart">
                        <img src={cart} alt="Cart"></img>
                    </Link>
                    <Link to="/login">
                        <div>Log In</div>
                    </Link>
                    <Link to="/signup">
                        <div>Sign Up</div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}