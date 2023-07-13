import { useEffect, useState } from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeProvider } from 'features/ThemeSwitcher';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { theme: currentTheme } = context.globals;

  const [theme, setTheme] = useState(defaultTheme);

  // Для сторибука
  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);

      const { body } = document;
      body.classList.add(currentTheme);

      setTheme((oldTheme) => {
        if (oldTheme !== currentTheme) body.classList.remove(oldTheme);
        return currentTheme;
      });
    }
  }, [currentTheme]);
  // ***

  return (
    <ThemeProvider
      currentTheme={theme}
      currentSetTheme={setTheme}
    >
      <div
        className='app'
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};
