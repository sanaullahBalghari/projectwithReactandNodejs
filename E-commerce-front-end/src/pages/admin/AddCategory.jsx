import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';

function AddCategory() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Add New Category</h2>
          <Input label="Category Name" placeholder="Enter category name" />
          <Button variant="primary" className="mt-4">Add Category</Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCategory;