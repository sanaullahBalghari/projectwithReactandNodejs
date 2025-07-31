import React from 'react';
import Table from '../common/Table.jsx';
import Button from '../common/Button.jsx';
import { Link } from 'react-router-dom';

function AdminTable({ headers, data, renderRow, onEdit, onDelete }) {
  return (
    <Table headers={headers}>
      {data.map((item, index) => (
        <tr key={index} className="border-b">
          {renderRow(item)}
          <td className="px-6 py-3">
            {onEdit && (
              <Link to={onEdit(item)}>
                <Button variant="secondary" className="mr-2">Edit</Button>
              </Link>
            )}
            {onDelete && (
              <Button variant="danger" onClick={() => onDelete(item)}>Delete</Button>
            )}
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default AdminTable;
