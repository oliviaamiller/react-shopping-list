import { useState } from 'react';
import { useItems } from '../../context/ShoppingProvider';
import Item from '../../components/Items/Item';
import styles from './List.css';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useItems();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <div className={styles.list}>
      <form className={styles.listForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className={styles.addButton}>
          Add Item
        </button>
      </form>
      <div>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}
