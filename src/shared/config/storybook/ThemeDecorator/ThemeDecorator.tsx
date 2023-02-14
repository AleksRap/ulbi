import { StoryContext, StoryFn } from '@storybook/react';
import { Theme, ThemeContext } from 'features';
import { useEffect, useState } from 'react';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { theme: currentTheme } = context.globals;

  const [theme, setTheme] = useState(Theme.LIGHT);

  const defaultProps = {
    theme,
    setTheme,
  };

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      <div
        className={`app ${theme}`}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
