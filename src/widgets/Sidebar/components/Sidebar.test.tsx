import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from 'widgets';

describe('Sidebar', () => {
  test('Test render', () => {
    render(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', async () => {
    render(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed');

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    await userEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('isCollapsed');
  });
});
