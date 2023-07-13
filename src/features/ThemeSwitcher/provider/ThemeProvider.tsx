import { useState, FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  currentTheme?: Theme;
  currentSetTheme?: Dispatch<SetStateAction<Theme>>;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  currentTheme,
  currentSetTheme,
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const defaultProps = {
    theme: currentTheme ?? theme,
    setTheme: currentSetTheme ?? setTheme,
  };

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
