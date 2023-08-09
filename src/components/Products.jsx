import { useState, useEffect } from "react";
import React from "react";
import { ProductCard } from "./ProductCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

export const Products = () => {
     const [products, setProducts] = useState([])
     const dispatch = useDispatch();
     const [loaded, setLoaded] = useState(false);
     const addCart = (product) => {
        dispatch(addToCart(product))
     }
     const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

     useEffect(() => {
        fetch("https://gym-b.onrender.com/api/products")
            .then(response => response.json())
            .then(data => {
              setProducts(data?.data);
              setLoaded(true); // Set loaded to true after successful fetch
            })
            .catch(e => console.log(e))
     }, [])
    if (loaded === false) {
      return <div className="text-white text-3xl font-bold h-60vh flex items-center justify-center h-screen">Products are loading...</div>
    }
    return (
        <div className="container mx-auto pb-4 w-2/3 text bg-black">
            <h2>Products</h2>
            <Carousel responsive={responsive}>
              {
                  products.length > 0 && products.map((product, index) => {
                      return (
                          <div className="w-full p-3 flex align-center border-solid">
                              <ProductCard key={index} product={product} onAddProduct={addCart}></ProductCard>
                          </div>
                      )
                  })
              }
            </Carousel>
        </div>
    )
}