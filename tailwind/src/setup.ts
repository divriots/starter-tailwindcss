import { setup as setupTwind } from 'twind/shim';
import { partialTheme } from './partial_theme';
import typography from '@twind/typography';

export const setup = () =>
  setupTwind({ theme: partialTheme, plugins: { ...typography() } });
