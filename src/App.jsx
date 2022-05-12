import Header from './components/Layout/Header';
import ShoppingList from './views/Shopping/List';
import { ShoppingProvider } from './context/ShoppingProvider';
import styles from './App.css';

export default function App() {
  return (
    <>
      <ShoppingProvider>
        <Header />
        <ShoppingList />
      </ShoppingProvider>
    </>
  );
}
