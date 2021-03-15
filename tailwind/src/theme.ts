import merge from 'deepmerge';
import resolveConfig from 'tailwindcss/resolveConfig';

import { typography } from '~/typography';
import { colors } from '~/colors';
import { border } from '~/border';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { spacing } from '~/spacing';
import { zIndex } from '~/z-index';
import { setup } from 'twind/shim';

const partialTheme = merge.all([
  typography,
  colors,
  border,
  opacity,
  shadows,
  spacing,
  zIndex,
]);

setup({ theme: partialTheme });

export const { theme } = resolveConfig({ theme: partialTheme });
