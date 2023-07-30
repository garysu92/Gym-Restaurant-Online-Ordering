export const ProductCard = ({ product }) => {
    return (
        <>
            <img src={product.imageUrl} alt={product.name}></img>
            <div>{product.name}</div>
            <div>{product.adjective}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
        </>
    )
}