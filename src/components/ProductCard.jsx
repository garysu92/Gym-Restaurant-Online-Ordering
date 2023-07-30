export const ProductCard = ({ product }) => {
    return (
        <div className="w-full p-4 m-2 rounded-2xl text-center bg-black">
            <img src={product.imageUrl} alt={product.name}></img>
            <div>{product.name}</div>
            <div>{product.adjective}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
        </div>
    )
}