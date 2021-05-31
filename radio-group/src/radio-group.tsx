import React, { useState, ReactNode } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { RadioGroup as HRadioGroup } from '@headlessui/react'
import { setup } from '~/tailwind';

setup();

export type RadioGroupItem = {
  /**
   The name of the item.
   */
  name: string;
  /**
   The description text for the item.
   */
  description: string;
}

export type RadioGroupProps = {
  /**
  The label of the radio group component.
   */
  label: string;
  /**
  Items for the radio group panel.
  */
  items?: RadioGroupItem[];
  /**
   The handler for the 'selected' event.
   */
  onSelected?: (item: RadioGroupItem) => void;
}

/**
Radio Groups give you the same functionality as native HTML radio inputs, without any of the styling.
They're perfect for building out custom UIs for selectors.
*/
export const RadioGroup = ({ label, items = [], onSelected = () => { } }: RadioGroupProps) => {
  const [selected, setSelected] = useState(items[0])

  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <HRadioGroup value={selected} onChange={item => {
          setSelected(item);
          onSelected(item);
        }}>
          <HRadioGroup.Label className="sr-only">{label}</HRadioGroup.Label>
          <div className="space-y-2">
            {items.map((item) => (
              <HRadioGroup.Option
                key={item.name}
                value={item}
                className={({ active, checked }) =>
                  `${active
                    ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60'
                    : ''
                  }
                  ${checked
                    ? 'bg-light-blue-900 bg-opacity-75 text-white'
                    : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ checked }) => (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <HRadioGroup.Label
                          as="p"
                          className={`font-medium  ${checked ? 'text-white' : 'text-grey-900'
                            }`}
                        >
                          {item.name}
                        </HRadioGroup.Label>
                        <HRadioGroup.Description
                          as="span"
                          className={`inline ${checked ? 'text-light-blue-100' : 'text-grey-500'
                            }`}
                        >
                          <span>{item.description}</span>
                        </HRadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckCircleIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                )}
              </HRadioGroup.Option>
            ))}
          </div>
        </HRadioGroup>
      </div>
    </div>
  )
}
