import Button from "./elements/Button";

const ProductDetailCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="p-4 m-4 mx-auto rounded-lg bg-slate-50 flex flex-col border-solid">
            <div id="product-card-info-container" className="border-solid">
                <div className="flex flex-col items-center justify-between">
                    <h2 className="text-2xl">{product.name}</h2>
                    <p className="text-2xl text-gray-500">
                        {product.desciption}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl text-black">{product.price}</div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <Button product={product} onClick={addProduct} >Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductDetailCard;