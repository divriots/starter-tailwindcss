import { silent } from 'twind';
import { setup as setupTwind } from 'twind/shim';
import { partialTheme } from './partial_theme';
import typography from '@twind/typography';

function setup() {
  setupTwind({
    mode: silent,
    theme: partialTheme,
    plugins: { ...typography() },
  });
}

export { setup };
