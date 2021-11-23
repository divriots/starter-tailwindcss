import * as React from 'react';
import { useState } from 'react';
import { Switch as HSwitch } from '@headlessui/react';

export type SwitchProps = {
  /**
   The size of the switch button, in pixels
  */
  size?: number;
  /**
  The label of the switch
   */
  label?: string;
  /**
  Handler for the switch event.
  */
  onSwitched?: (enabled: boolean) => void;
  /**
  Default switch state
  */
  state?: boolean;
};

/**
 Switches are a pleasant interface for toggling a value between two states,
 and offer the same semantics and keyboard navigation as native checkbox elements.
*/
export const Switch = ({
  onSwitched = () => {},
  size = 34,
  label,
  state,
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(state);

  return (
    <HSwitch
      checked={enabled}
      onChange={(isEnabled: boolean) => {
        setEnabled(isEnabled);
        onSwitched(isEnabled);
      }}
      className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
        relative inline-flex flex-shrink-0 h-[${+size + 4}px] w-[${
        +size * 2 + 6
      }px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      {label && <span className="sr-only">Use setting</span>}
      <span
        aria-hidden="true"
        className={`${
          enabled ? `translate-x-[${+size + 2}px]` : 'translate-x-0'
        }
          pointer-events-none inline-block h-[${+size}px] w-[${+size}px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </HSwitch>
  );
};
