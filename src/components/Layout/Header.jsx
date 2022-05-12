import { useItems } from '../../context/ShoppingProvider';
import styles from './Header.css';

export default function Header() {
  const { items, handleClearList } = useItems();

  return (
    <section className={styles.header}>
      <h2>Shopping List</h2>
      <div>Items Needed to be Bought: {items.length}</div>
      <button onClick={() => handleClearList()}>clear list</button>
    </section>
  );
}
