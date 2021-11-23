import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core/dist/CoreLayout';
import { Switch } from '~/switch';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import './styles.css';

function switchMode() {
  if (
    localStorage['tailwindcss-theme'] === 'dark' ||
    (!('tailwindcss-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const ColorModeSwitch = () => {
  switchMode();

  return (
    <div className="self-center flex items-center ml-4 ">
      <SunIcon className="w-4 h-4 mr-1" />
      <Switch
        size="18"
        state={localStorage['tailwindcss-theme'] === 'dark'}
        onSwitched={(state) => {
          localStorage['tailwindcss-theme'] = state ? 'dark' : 'light';
          switchMode();
        }}
      />
      <MoonIcon className="w-4 h-4 ml-1" />
    </div>
  );
};

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
      stylesheetSwitch={<ColorModeSwitch />}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
