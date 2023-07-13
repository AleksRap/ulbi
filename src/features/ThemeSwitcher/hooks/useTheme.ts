import { useCallback, useContext, useEffect } from 'react';
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../provider/ThemeContext';

interface UseThemeResult {
  handleSetTheme: (theme: Theme) => void;
  handleToggleTheme: VoidFunction;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = useCallback(() => {
    setTheme((oldTheme: Theme) => {
      const newTheme = oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      const { body } = document;
      body.classList.remove(oldTheme);
      body.classList.add(newTheme);

      return newTheme;
    });
  }, [setTheme]);

  const handleSetTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      const { body } = document;
      body.classList.add(newTheme);

      setTheme((oldTheme) => {
        if (oldTheme !== newTheme) body.classList.remove(oldTheme);
        return newTheme;
      });
    },
    [setTheme],
  );

  useEffect(() => {
    const newTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? DEFAULT_THEME) as Theme;

    const { body } = document;
    if (!body.classList.contains(newTheme)) handleSetTheme(newTheme);
  }, [handleSetTheme]);

  return { theme, handleToggleTheme, handleSetTheme };
}
