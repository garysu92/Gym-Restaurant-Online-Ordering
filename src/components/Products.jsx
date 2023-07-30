import { useState, useEffect } from "react";
import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
     const [products, setProducts] = useState([])

     useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
     }, [])

    return (
        <div className="container mx-auto pb-4 w-2/3 text">
            <h2>Products</h2>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product}></ProductCard>
                    )
                })
            }
        </div>
    )
}