import { useState, FC, PropsWithChildren } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
