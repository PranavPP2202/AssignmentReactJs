import React, { useState } from 'react';

interface AddFormProps {
  onAdd: (name: string, role: string, email: string) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name, role, email);
    setName('');
    setRole('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Role:
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddForm;
