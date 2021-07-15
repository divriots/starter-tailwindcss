import * as React from 'react';
import { Menu } from '../index';
import {
  PencilIcon,
  DuplicateIcon,
  ExternalLinkIcon,
  TrashIcon,
  ArchiveIcon,
} from '@heroicons/react/solid';
import '~/all/src/styles.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const menu = () => (
  <Menu
    items={[
      {
        Icon: PencilIcon,
        label: 'Edit',
        onClick: () => window.alert('Edit was pressed!'),
      },
      { Icon: DuplicateIcon, label: 'Duplicate' },
      { Icon: ArchiveIcon, label: 'Archive' },
      { Icon: ExternalLinkIcon, label: 'Move' },
      { Icon: TrashIcon, label: 'Delete' },
      { label: 'Exit' },
    ]}
  />
);
