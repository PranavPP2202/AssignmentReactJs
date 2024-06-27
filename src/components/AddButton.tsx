import React from 'react';

interface AddButtonProps {
  onAdd: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => {
  return <button className="add-button" onClick={onAdd}>Add Data</button>;
};

export default AddButton;
