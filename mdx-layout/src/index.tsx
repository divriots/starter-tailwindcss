import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core/dist/CoreLayout';
import { theme } from '~/all';
import { setup } from 'twind/shim';

setup({ theme });

export const DefaultLayout = (props) => (
  <MDXProvider components={{}}>
    <CoreLayout
      logo={
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
          width="64"
          height="64"
        />
      }
      {...props}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
