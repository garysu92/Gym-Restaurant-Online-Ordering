import { AddToCart } from "./AddToCart";

export const ProductCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-full p-4 m-2 rounded-2xl text-white text-center bg-black border-solid">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-10 h-20">{product.description}</p>
            <div>{product.price}</div>
            <AddToCart product={product} onAddProduct={addProduct}></AddToCart>
        </div>
    )
}