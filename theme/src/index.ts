import { typography } from '~/typography';
import { colors } from '~/colors';
import { border } from '~/border';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { spacing } from '~/spacing';
import { zIndex } from '~/z-index';

export const theme = {
  extend: {
    ...typography,
    ...colors,
    ...border,
    ...opacity,
    ...shadows,
    ...spacing,
    ...zIndex,
  },
};
