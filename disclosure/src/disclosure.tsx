import * as React from 'react';
import { Disclosure as HDisclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export type DisclosureProps = {
  /**
  Title text for the disclosure panel.
  */
  title: string;
  /**
  Details text to disclose.
  */
  details: string;
};

/**
  A simple, accessible foundation for building custom UIs that show and hide content, like togglable accordion panels.
*/
export const Disclosure = ({ title, details }: DisclosureProps) => (
  <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
    <HDisclosure>
      {({ open }) => (
        <>
          <HDisclosure.Button
            className="flex justify-between w-full px-4 py-2 text-sm
            font-medium text-left text-purple-900 bg-purple-100
            rounded-lg hover:bg-purple-200 focus:outline-none
            focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? 'transform rotate-180' : ''
                } w-5 h-5 text-navy`}
            />
          </HDisclosure.Button>
          <HDisclosure.Panel className="px-4 pt-4 pb-2 text-sm text-grey-500">
            {details}
          </HDisclosure.Panel>
        </>
      )}
    </HDisclosure>
  </div>
);
