import React, { useState } from 'react';
import Title from './Title';
import AddButton from './AddButton';
import DataTable from './DataTable';
import AddForm from './AddForm';
import SearchBar from './SearchBar';

const Home: React.FC = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Marlie', role: 'Bowler', email: 'MK@gmail.com' },
    { id: 2, name: 'Josh', role: 'All Rounder', email: 'JH@gmail.com' },
    { id: 3, name: 'Lasith', role: 'Batsman', email: 'LM@gmail.com' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAdd = (name: string, role: string, email: string) => {
    const nextId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newData = { id: nextId, name, role, email };
    setData([...data, newData]);
    setShowForm(false); // Hide the form after adding
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Title text="Data Table" />
      <AddButton onAdd={() => setShowForm(true)} />
      {showForm && <AddForm onAdd={handleAdd} />}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default Home;
