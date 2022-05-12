import { useItems } from '../../context/ShoppingProvider';
import styles from './Header.css';

export default function Header() {
  const { items } = useItems();

  return (
    <section className={styles.header}>
      <h2>Shopping List</h2>
      <div>Items Needed to be Bought: {items.length}</div>
      <button>clear list</button>
    </section>
  );
}
