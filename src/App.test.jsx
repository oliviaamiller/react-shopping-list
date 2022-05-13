import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Shopping behavioral list tests', () => {
  it('should add an item to the list', async () => {
    render(<App />);

    const item = await screen.findByPlaceholderText(/add an item/i);
    userEvent.type(item, 'apples');

    const button = await screen.findByRole('button', { name: /add item/i });
    userEvent.click(button);

    const apples = await screen.findByText(/apples/i);
    expect(apples).toBeInTheDocument();
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
});
