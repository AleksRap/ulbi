import { useState, FC, PropsWithChildren } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const defaultProps = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
