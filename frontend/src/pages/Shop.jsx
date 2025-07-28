import { Link } from "react-router-dom";

const Shop = () => {
  const products = [
    { id: 1, name: "Smartphone", price: 299, image: "https://via.placeholder.com/300x200?text=Smartphone" },
    { id: 2, name: "Headphones", price: 99, image: "https://via.placeholder.com/300x200?text=Headphones" },
    { id: 3, name: "Laptop", price: 899, image: "https://via.placeholder.com/300x200?text=Laptop" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded p-4">
            <img src={product.image} alt={product.name} className="rounded mb-3" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
