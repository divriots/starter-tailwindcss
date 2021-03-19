import merge from 'deepmerge';

import { typography } from '~/typography';
import { colors } from '~/colors';
import { border } from '~/border';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { spacing } from '~/spacing';
import { zIndex } from '~/z-index';

const partialTheme = merge.all([
  typography,
  colors,
  border,
  opacity,
  shadows,
  spacing,
  zIndex,
]);

export { partialTheme };
