import * as React from 'react';
import { useState } from 'react';
import { Switch as HSwitch } from '@headlessui/react';

export type SwitchProps = {
  /**
  Handler for the switch event.
  */
  onSwitched?: (enabled: boolean) => void;
};

/**
 Switches are a pleasant interface for toggling a value between two states,
 and offer the same semantics and keyboard navigation as native checkbox elements.
*/
export const Switch = ({ onSwitched = () => { } }: SwitchProps) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-16">
      <HSwitch
        checked={enabled}
        onChange={(isEnabled: boolean) => {
          setEnabled(isEnabled);
          onSwitched(isEnabled);
        }}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex flex-shrink-0 h-11 w-20 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-10 w-10 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </HSwitch>
    </div>
  );
};
