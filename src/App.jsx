import Header from './components/Layout/Header';
import ShoppingList from './views/Shopping/List';
import { ShoppingProvider } from './context/ShoppingProvider';

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
