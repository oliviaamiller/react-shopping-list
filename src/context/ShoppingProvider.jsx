import { createContext, useContext, useReducer } from 'react';

const initialListItem = [
  { id: Date.now(), text: 'Add items to your shopping list', bought: false },
];

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      //returns an array of items with the newest at the top of the list
      return [
        { id: Date.now(), text: action.payload.text, bought: false },
        ...state,
      ];
    case 'edit':
      //find the item by id, update the text, and return the updated item object to the array
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          const { bought, text } = action.payload.item;

          return {
            ...item,
            bought,
            text,
          };
        }
        return item;
      });
    case 'delete':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error('There is an error here!');
  }
};

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [items, dispatch] = useReducer(shoppingReducer, initialListItem);

  const handleAddItem = (text) => {
    dispatch({ type: 'add', payload: { text } });
  };

  const handleEditItem = (item) => {
    dispatch({ type: 'edit', payload: { item } });
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  return (
    <ShoppingContext.Provider
      value={{ items, handleAddItem, handleEditItem, handleDeleteItem }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ShoppingContext);
  // context = { items, handleAddItem, handleEditItem, handleDeleteItem }

  if (context === undefined)
    throw new Error('useItems must be called from within a ShoppingProvider');

  return context;
};
