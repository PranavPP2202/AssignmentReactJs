import React from 'react';

interface DataTableProps {
  data: { id: number; name: string; role: string; email: string; }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
