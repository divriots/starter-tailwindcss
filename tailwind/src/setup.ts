import { silent } from 'twind';
import { setup as setupTwind } from 'twind/shim';
import { partialTheme } from './partial-theme';
import typography from '@twind/typography';

export const setup = () =>
  setupTwind({
    mode: silent,
    theme: partialTheme,
    plugins: { ...typography() },
  });
