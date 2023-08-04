import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Paid from "../pages/Paid";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";

const Navigation = () => {
    const productsInCart = useSelector(cartProducts);
    return (
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/paid" element={<Paid />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;