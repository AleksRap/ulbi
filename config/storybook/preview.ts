import type { Preview } from '@storybook/react';

import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
  SuspenseDecorator,
  ReduxDecorator,
} from 'shared/config';
import { Theme, LOCAL_STORAGE_THEME_KEY } from 'features/ThemeSwitcher';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, RouterDecorator, ThemeDecorator, SuspenseDecorator, ReduxDecorator],
  globalTypes: {
    theme: {
      name: 'Тема',
      description: 'Темы для компонентов',
      defaultValue: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT,
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: Theme.LIGHT, title: 'Светлая тема' },
          { value: Theme.DARK, title: 'Темная тема' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
