import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../../components/user/OrderCard.jsx';
import Card from '../../components/common/Card.jsx'; // optional if needed
import Spinner from '../../components/common/Spinner.jsx';
function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/orders/allorders', {
          withCredentials: true, // Because you're using cookies
        });
        setOrders(res.data.data || []);
      } catch (err) {
        console.error('Error fetching orders:', err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {loading ? (
      <div className="flex justify-center mt-10">
          <Spinner />
        </div>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
