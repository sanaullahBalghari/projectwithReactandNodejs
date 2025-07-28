const Checkout = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      {/* Shipping Info */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h3 className="text-lg font-bold mb-4">Shipping Information</h3>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="text" placeholder="Address" className="input" />
          <input type="text" placeholder="City" className="input" />
          <input type="text" placeholder="Postal Code" className="input" />
          <input type="text" placeholder="Phone Number" className="input" />
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$398</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$10</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>$408</span>
        </div>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
