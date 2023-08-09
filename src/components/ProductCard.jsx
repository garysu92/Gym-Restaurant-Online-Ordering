import { AddToCart } from "./AddToCart";

export const ProductCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    const loadImage = async (url) => {
        try {
          const image = await import(url);
          return image.default;
        } catch (error) {
          console.error('Error loading image:', error);
          return null;
        }
      };

    return (
        <div className="w-full p-4 m-2 rounded-2xl text-white text-center bg-black border-solid">
            <img src={require(`../assets/images/${product.imageUrl}`)} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-10 h-20">{product.description}</p>
            <div>{product.price}</div>
            <AddToCart product={product} onAddProduct={addProduct}></AddToCart>
        </div>
    )
}