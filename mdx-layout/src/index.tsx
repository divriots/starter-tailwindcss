import React from 'react';
import { TailwindLayout } from '@divriots/dockit-react/mdx-layout-tailwind';
import { setup } from '~/tailwind';

setup();

export const Layout = (props) => (
  <TailwindLayout
    logo={
      <img
        src="data:image/png;base64,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"
        width="180"
        style={{ margin: '1rem'}}
      />
    }
    {...props}
  />
);
