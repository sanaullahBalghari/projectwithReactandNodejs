import React, { useState, useContext } from 'react';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handlePlaceOrder = async () => {
    console.log("Sending order data:", form);
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:8000/api/orders/place',
        form,
        {
         withCredentials:true,
        }
      );

      console.log('Order Placed:', res.data);
 
      navigate('/orders'); // or `/orders`
    } catch (err) {
      alert(err.response?.data?.message || 'Order failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" />
            <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1234567890" />
            <Input label="Address" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" />
            <Input label="City" name="city" value={form.city} onChange={handleChange} placeholder="New York" />
            <Input label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="10001" />
          </div>
          <Button onClick={handlePlaceOrder} variant="primary" className="mt-6 w-full">
            {loading ? "Placing..." : "Place Order"}
          </Button>
        </Card>
        
        {/* Keep Order Summary Static/Improved Later */}
        <Card>
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Sample Product x 2</span>
              <span>$199.98</span>
            </div>
            <div className="flex justify-between">
              <span>Sample Product 2 x 1</span>
              <span>$99.99</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>$299.97</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Checkout;
