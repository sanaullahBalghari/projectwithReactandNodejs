import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Dummy product
  const product = {
    name: "Smartphone X1",
    price: 299,
    image: "https://via.placeholder.com/500x300?text=Smartphone+X1",
    description: "This is a dummy product. Best in class smartphone with great features.",
  };

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="rounded" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
