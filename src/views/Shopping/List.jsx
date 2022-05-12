import { useState } from 'react';
import { useItems } from '../../context/ShoppingProvider';
import Item from '../../components/Items/Item';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useItems();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <>
      <h2>The List:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}
