import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black">AkhonzadaShop</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/register" className="hover:text-blue-600">Register</Link>
          <Link to="/orders" className="hover:text-blue-600">Orders</Link>
          <Link to="/profile" className="hover:text-blue-600">profile</Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block">Home</Link>
          <Link to="/shop" className="block">Shop</Link>
          <Link to="/cart" className="block">Cart</Link>
          <Link to="/login" className="block">Login</Link>
          <Link to="/register" className="block">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
