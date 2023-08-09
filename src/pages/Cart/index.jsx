import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "../../components/Tabs";
import { cartProducts } from "../../stores/cart/cartSlice";
import { ProductsSummary } from "../../components/ProductsSummary";
import Button from "../../components/elements/Button";
import { AddressForm } from "../../components/AddressForm";
import { StripeWrapper } from "../../components/PaymentForm"

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const [activeTab, setActiveTab] = useState('Summary');

    const [categories] = useState(['Summary', 'Delivery', 'Payment']);

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
    }
    if (!cart || cart.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }
    return (
        <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs
                list={categories}
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
                />
            <div className={`tabs ${activeTab !== 'Summary' ? 'hidden' : ''}`}>
                    <ProductsSummary />
                    <div className="flex justify-end p-2">
                    <Button variant="dark" className="flex items-center" onClick={()=>onTabSwitch('Delivery')}><span className="mr-1">Next</span></Button>
                    </div>
            </div>
            <div className={`tabs ${activeTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={onTabSwitch}></AddressForm>
            </div>
            <div className={`tabs ${activeTab !== 'Payment' ? 'hidden' : ''}`}>
                <StripeWrapper></StripeWrapper>
            </div>
        </div>
    )
}

export default Cart;