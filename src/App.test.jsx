import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Shopping behavioral list tests', () => {
  it('should display a shopping list', async () => {
    render(<App />);

    const initialItem = await screen.findByText(
      /add items to your shopping list/i
    );

    expect(initialItem).toBeInTheDocument();
  });

  it('should edit a list item', async () => {
    render(<App />);

    const initialItem = await screen.findByText(
      /add items to your shopping list/i
    );

    const button = await screen.findByRole('button', { name: /✏/i });
    userEvent.click(button);

    const edit = await screen.findByLabelText('edit');
    userEvent.type(edit, 'ice cream');

    const save = await screen.findByRole('button', { name: /save/i });
    userEvent.click(save);

    const newItem = await screen.findByText(/ice cream/i);

    expect(initialItem).not.toBeInTheDocument();

    expect(newItem).toBeInTheDocument();
  });

  it('should delete an item from the list', async () => {
    render(<App />);

    const initialItem = await screen.findByText(
      /add items to your shopping list/i
    );

    const button = await screen.findByRole('button', { name: /x/i });
    userEvent.click(button);

    expect(initialItem).not.toBeInTheDocument();
  });

  it('should add an item to the list', async () => {
    render(<App />);

    const item = await screen.findByPlaceholderText(/add an item/i);
    userEvent.type(item, 'apples');

    const button = await screen.findByRole('button', { name: /add item/i });
    userEvent.click(button);

    const apples = await screen.findByText(/apples/i);
    expect(apples).toBeInTheDocument();
  });

});
