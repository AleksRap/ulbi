import { StoryContext, StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'features/ThemeSwitcher';
import { useEffect, useState } from 'react';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { theme: currentTheme } = context.globals;

  const [theme, setTheme] = useState(Theme.LIGHT);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider initialTheme={theme}>
      <div
        className={`app ${theme}`}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};
