const Orders = () => {
  const orders = [
    { id: "ORD123", date: "2025-07-25", total: 399, status: "Delivered" },
    { id: "ORD124", date: "2025-07-20", total: 129, status: "Pending" },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="bg-white shadow rounded">
        {orders.map((order) => (
          <div key={order.id} className="border-b px-4 py-3 flex justify-between">
            <div>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
            </div>
            <div>
              <p><strong>Total:</strong> ${order.total}</p>
              <p className={`font-semibold ${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
