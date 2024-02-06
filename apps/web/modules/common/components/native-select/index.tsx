import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import ChevronIcon from "@/modules/common/icons/chevron";

interface NativeSelectProps {
  data: Record<string, string>[];
  onSelectDt: (dt: any) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NativeSelect = ({ data, onSelectDt }: NativeSelectProps) => {
  const [selectedDt, setSelectedDt] = useState(data[0]);

  const onSelectedData = (dt: Record<string, string>) => {
    setSelectedDt(dt);
    onSelectDt(dt);
  };

  return (
    <Listbox onChange={onSelectedData} value={selectedDt}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="relative min-w-40 cursor-default rounded-full py-3.5 pl-6 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none">
            <span className="block truncate">{selectedDt.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronIcon />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={open}
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {data.map((dt, idx) => (
                <Listbox.Option
                  className={({ active }) =>
                    classNames(
                      active ? "bg-primary-900 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  key={idx}
                  value={dt}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {dt.name}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-primary-900",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <Image
                            alt="ic_check"
                            className="w-5 h-5"
                            src={require("@/assets/images/icons/ic_check.svg")}
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default NativeSelect;
