import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from 'shared/lib';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', async () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed');

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    await userEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('isCollapsed');
  });
});
