import { Link } from "react-router-dom"
import img from "../assets/images/logo.jpeg"
import cart from "../assets/images/cart.svg"

export const Header = ({ cartCount }) => {
    return (
        <nav id="header" className="text-gray-500 border-solid">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrap pl-4 flex items-center">
                    <Link to="/">
                        <img src={img} alt="Logo" className="w-40 h-40"></img>
                    </Link>
                    <div className="font-anton text-4xl"><strong>ANABOLICKS</strong></div>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10 border-solid">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <Link to="/about" reloadDocument>
                        <div>About</div>
                    </Link>
                </div>
                <div className="flex items=center justify-center space-x-4 border-solid">
                    <Link to="/cart" className="mr-4 relative">
                        <img src={cart} alt="Cart"></img>
                        { cartCount > 0 ? <div className="rounded-full bg-yellow-500 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">
                                            {cartCount}
                                          </div> : null}
                    </Link>
                </div>
            </div>
        </nav>
    )
}