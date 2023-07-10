import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });

    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });

    const incrementBtn = screen.getByTestId('increment-btn');
    await userEvent.click(incrementBtn);

    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });

    const decrementBtn = screen.getByTestId('decrement-btn');
    await userEvent.click(decrementBtn);

    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('9');
  });
});
