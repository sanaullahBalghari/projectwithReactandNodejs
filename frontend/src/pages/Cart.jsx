const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Smartphone",
      price: 299,
      quantity: 1,
      image: "https://via.placeholder.com/100x80?text=Smartphone",
    },
    {
      id: 2,
      name: "Headphones",
      price: 99,
      quantity: 2,
      image: "https://via.placeholder.com/100x80?text=Headphones",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 shadow rounded">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">${item.price} × {item.quantity}</p>
            </div>
            <p className="text-gray-700 font-medium">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Total: ${total}</h3>
        <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
