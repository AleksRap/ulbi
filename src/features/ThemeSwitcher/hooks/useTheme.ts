import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../provider/ThemeContext';

interface UseThemeResult {
  toggleTheme: VoidFunction;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((theme: Theme) => {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      return newTheme;
    });
  };

  return { theme, toggleTheme };
}
