import { createContext, Dispatch, SetStateAction } from 'react';

export enum Theme {
  LIGHT = 'normal',
  DARK = 'dark',
}

export const DEFAULT_THEME = Theme.LIGHT;

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => undefined,
});
