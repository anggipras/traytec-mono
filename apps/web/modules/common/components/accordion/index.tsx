import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ChevronIcon from "../../icons/chevron";

interface AccordionpProps {
  data: {
    path: string;
    menuName: string;
    submenu: { path: string; subMenuName: string }[] | [];
  }[];
  closeMenu: () => void;
}

export default function Accordion({ data, closeMenu }: AccordionpProps) {
  const router = useRouter();
  const [accordionOpen, setAccordionOpen] = useState<number>(-1);

  const onSelectMenu = (val: Record<string, any>) => {
    void router.push(val.path);
    closeMenu();
  };

  return (
    <>
      {data.map((val, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between w-full bg-gray-200 rounded-lg">
            <span
              aria-hidden
              className="typo-copy-small text-gray-400 px-3 py-4"
              onClick={() => {
                onSelectMenu(val);
              }}
            >
              {val.menuName}
            </span>
            {val.submenu.length > 0 && (
              <div
                aria-hidden
                className="px-3 py-4"
                onClick={(e) => {
                  e.preventDefault();
                  setAccordionOpen(accordionOpen === idx ? -1 : idx);
                }}
              >
                <ChevronIcon
                  direction={accordionOpen === idx ? "up" : "down"}
                />
              </div>
            )}
          </div>
          <div
            className={`grid rounded-lg bg-gray-100 my-2 ml-3 overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            role="region"
          >
            <div className="overflow-hidden">
              {val.submenu.length > 0 &&
                val.submenu.map(
                  (
                    subVal: { path: string; subMenuName: string },
                    subIdx: number
                  ) => (
                    <Link href={subVal.path} key={subIdx}>
                      <div className="px-6 py-3 typo-copy-small">
                        {subVal.subMenuName}
                      </div>
                    </Link>
                  )
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
