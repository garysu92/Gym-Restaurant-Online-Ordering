import { AddToCart } from "./AddToCart";

export const ProductCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-100 h-100 p-4 m-2 rounded-2xl text-black text-center bg-gray-200 border-solid flex flex-col justify-center items-center">
            <img src={require(`../assets/images/${product.imageUrl}`)} alt={product.name} className="w-32 h-32 object-cover mb-2"/>
            <h2 className="text-lg">{product.name}</h2>
            <p className="mb-4 h-14">{product.description}</p>
            <div>{product.price}</div>
            <div className="self-end">
                <AddToCart product={product} onAddProduct={addProduct}></AddToCart>
            </div>
        </div>
    )
}