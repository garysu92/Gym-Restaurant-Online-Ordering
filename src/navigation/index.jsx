import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Paid from "../pages/Paid";
import About from "../pages/About";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";

const Navigation = () => {
    const productsInCart = useSelector(cartProducts);
    let totalItems = 0;
    for (let i = 0; i < productsInCart.length; i++) {
        totalItems += productsInCart[i].amount;
    }
    return (
        <BrowserRouter>
            <Header cartCount={productsInCart ? totalItems : 0}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/paid" element={<Paid />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;