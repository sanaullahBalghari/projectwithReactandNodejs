import React from 'react';
import Table from '../common/Table.jsx';
import Button from '../common/Button.jsx';

function AdminTable({ headers, data, renderRow }) {
  return (
    <Table headers={headers}>
      {data.map((item, index) => (
        <tr key={index} className="border-b">
          {renderRow(item)}
          <td className="px-6 py-3">
            <Button variant="secondary" className="mr-2">Edit</Button>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default AdminTable;