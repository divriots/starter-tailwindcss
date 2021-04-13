import resolveConfig from 'tailwindcss/resolveConfig';
import { setup } from './setup';
import { partialTheme } from './partial-theme';

setup();
export const { theme } = resolveConfig({ theme: partialTheme });
