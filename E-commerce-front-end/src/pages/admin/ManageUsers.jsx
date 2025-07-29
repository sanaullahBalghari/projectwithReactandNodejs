import React from 'react';
import Sidebar from '../../components/layout/Sidebar.jsx';
import AdminTable from '../../components/admin/AdminTable.jsx';
import Badge from '../../components/common/Badge.jsx';

function ManageUsers() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-6">Manage Users</h2>
        <AdminTable
          headers={['ID', 'Name', 'Email', 'Role', 'Actions']}
          data={users}
          renderRow={(user) => (
            <>
              <td className="px-6 py-3">{user.id}</td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">
                <Badge>{user.role}</Badge>
              </td>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default ManageUsers;