import resolveConfig from 'tailwindcss/resolveConfig';
import { partialTheme } from './partial_theme';
const { theme } = resolveConfig({ theme: partialTheme });

export { theme };
