import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import AdminTable from '../../components/admin/AdminTable.jsx';
import Button from '../../components/common/Button.jsx';

function ManageCategories() {
  const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Categories</h2>
          <Button variant="primary">Add Category</Button>
        </div>
        <AdminTable
          headers={['ID', 'Name', 'Actions']}
          data={categories}
          renderRow={(category) => (
            <>
              <td className="px-6 py-3">{category.id}</td>
              <td className="px-6 py-3">{category.name}</td>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default ManageCategories;