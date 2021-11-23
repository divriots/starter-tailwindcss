import * as React from 'react';
import { Listbox } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const listbox = () => (
  <Listbox
    items={[
      { name: 'Wade Cooper' },
      { name: 'Arlene McCoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]}
    onSelected={({ name }) => console.log('You selected', name)}
  />
);
