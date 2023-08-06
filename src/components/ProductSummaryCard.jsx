import { useDispatch } from "react-redux";
import {incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice";

export const ProductsSummaryCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex p-1 sm:p-2 border-b border-b-gray-200 border-solid">
            <div className="product-image mr-2 border border-grey-200 rounded-lg w-full sm:w-1/3 border-solid">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info border-solid">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className="product-price-qt flex flex-col items-center justify-center border-solid">
                <div className="price">{`${product.price}$`}</div>
                <div className="quantity flex">
                    <button className="p-1" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
                    <span className="p-1">{product.amount}</span>
                    <button className="p-1" onClick={() => dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
        </div>
    )
}