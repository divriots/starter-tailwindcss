import * as React from 'react';
import { Disclosure } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const disclosure = () => (
  <Disclosure
    title="What is your refund policy?"
    details="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  />
);
