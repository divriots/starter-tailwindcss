import * as React from 'react';
import { Switch } from '../index';
import '~/all/src/styles.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const switch_ = () => (
  <Switch onSwitched={(enabled) => console.log('Switched to', enabled)} />
);
