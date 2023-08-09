import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(getAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    // get products, which is empty, when mount
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.name);
        let index = categories.findIndex(category => newActiveTab === category);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    return (
        <div className="bg-white">
           {
            products.status !== 'fulfilled' ?
            <div>loading...</div> :
            <div className="menu-wrapper">
                {
                    products.products &&
                    <Tabs
                        list={products.products.map((product) => product.name)}
                        activeTab={activeTab}
                        onTabSwitch={onTabSwitch}
                    />
                }
                <div className="flex mx-3">
                    <div className="container mx-auto flex align-center py-2 border-b-gray-400">
                    {
                    products.products && products.products[activeTabIndex].products.map((product, index) => {
                        return (
                           <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
                        )
                    })
                }
                    </div>
                
                </div>
            </div>
           }
        </div>
    )
}

export default Menu;