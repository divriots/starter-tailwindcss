import * as React from 'react';
import { Tabs, Panel } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const tabs = () => (
  <Tabs
    items={[
      {
        label: 'Recent',
        panel: () => (
          <Panel
            items={[
              {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
              },
              {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
              },
            ]}
          />
        ),
      },
      {
        label: 'Popular',
        panel: () => (
          <Panel
            items={[
              {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
              },
              {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
              },
            ]}
          />
        ),
      },
      {
        label: 'Trending',
        panel: () => (
          <Panel
            items={[
              {
                id: 1,
                title:
                  'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
              },
              {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
              },
            ]}
          />
        ),
      },
    ]}
  />
);
