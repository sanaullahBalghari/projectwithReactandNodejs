import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import AdminTable from '../../components/admin/AdminTable.jsx';
import Button from '../../components/common/Button.jsx';

function ManageProducts() {
  const products = [
    { id: 1, name: 'Sample Product', price: 99.99, stock: 50 },
    { id: 2, name: 'Sample Product 2', price: 149.99, stock: 30 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Products</h2>
          <Button variant="primary">Add Product</Button>
        </div>
        <AdminTable
          headers={['ID', 'Name', 'Price', 'Stock', 'Actions']}
          data={products}
          renderRow={(product) => (
            <>
              <td className="px-6 py-3">{product.id}</td>
              <td className="px-6 py-3">{product.name}</td>
              <td className="px-6 py-3">${product.price}</td>
              <td className="px-6 py-3">{product.stock}</td>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default ManageProducts;