import React from 'react';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';

function Checkout() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Phone" type="tel" placeholder="+1234567890" />
            <Input label="Address" placeholder="123 Main St" />
            <Input label="City" placeholder="New York" />
            <Input label="Postal Code" placeholder="10001" />
          </div>
          <Button variant="primary" className="mt-6 w-full">Place Order</Button>
        </Card>
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