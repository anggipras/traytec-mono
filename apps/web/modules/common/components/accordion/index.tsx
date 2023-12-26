import { useState } from "react";
import ChevronIcon from "../../icons/chevron";

interface AccordionpProps {
  data: Record<string, any>[];
}

export default function Accordion({ data }: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<number>(-1);

  return (
    <>
      {data.map((val, idx) => (
        <>
          <div
            aria-hidden
            className="flex items-center justify-between w-full bg-gray-200 rounded-lg px-3 py-4"
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setAccordionOpen(accordionOpen === idx ? -1 : idx);
            }}
          >
            <span className="typo-copy-small text-gray-400">
              {val.menuName}
            </span>
            <ChevronIcon direction={accordionOpen === idx ? "up" : "down"} />
          </div>
          <div
            className={`grid rounded-lg bg-gray-100 mt-2 ml-3 overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            role="region"
          >
            <div className="overflow-hidden">
              {val.submenu.map((subVal: string, subIdx: number) => (
                <div className="px-6 py-3 typo-copy-small" key={subIdx}>
                  {subVal}
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
}
