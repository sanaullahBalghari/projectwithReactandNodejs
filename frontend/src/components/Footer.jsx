const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">AkhonzadaShop</h3>
          <p className="text-sm">
            Your one-stop destination for quality tech and fashion. Shop smart, live better.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-600">Shop</a></li>
            <li><a href="/cart" className="hover:text-blue-600">Cart</a></li>
            <li><a href="/profile" className="hover:text-blue-600">Profile</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">Email: support@akhonzadashop.com</p>
          <p className="text-sm">Phone: +92 312 0000000</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">Facebook</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} AkhonzadaShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
