import resolveConfig from 'tailwindcss/resolveConfig';
import { partialTheme } from './partial-theme';

export const { theme } = resolveConfig({ theme: partialTheme });
