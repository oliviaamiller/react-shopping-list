import { useItems } from '../../context/ShoppingProvider';

export default function Header() {
  const { items } = useItems();

  return <div>Items Needed to be Bought: {items.length}</div>;
}
