import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12 text-center rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Akhonzada Shop 🛍️</h1>
        <p className="text-gray-600 mb-6">Get the best deals on top quality products!</p>
        <Link to="/shop">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Shop Now</button>
        </Link>
      </div>

      {/* Featured Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded shadow p-4">
              <img src={`https://via.placeholder.com/300x200?text=Product+${item}`} alt={`Product ${item}`} className="rounded mb-3" />
              <h3 className="text-lg font-medium">Product {item}</h3>
              <p className="text-gray-500">$99.99</p>
              <Link to={`/product/${item}`}>
                <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
