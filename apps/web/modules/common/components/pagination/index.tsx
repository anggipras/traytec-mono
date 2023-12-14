/* eslint-disable @typescript-eslint/no-non-null-assertion -- Remove non null assertion for pagination */
import React, { useEffect, useState } from "react";
import ChevronIcon from "@/modules/common/icons/chevron";

interface PaginationProps {
  active: number;
  size: number;
  step: number;
  onClickHandler: (value: number | string) => void;
}

const PaginationSection = (props: PaginationProps) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const { active, size, step, onClickHandler } = props;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showingNumbers = step * 2 + 1;
  let startNumber = screenWidth > 1279 ? 2 : 1;
  let startArrayNumber = props.step;

  let needStartDots = false;
  let needEndDots = false;

  if (active > step) {
    startArrayNumber = active - step;

    needStartDots = active > step + startNumber;
  }

  if (size > showingNumbers) {
    needEndDots = size > active + step + 1;

    if (size < active + step + 1) {
      startArrayNumber = size - showingNumbers + (screenWidth < 1280 ? 1 : 0);
    }
  }

  return (
    <div className="flex justify-center items-center list-none select-none w-full">
      <div
        aria-hidden="true"
        className="hidden medium:flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full mr-3 prev arrow-icon"
        onClick={() => {
          onClickHandler(1);
        }}
      >
        <ChevronIcon direction="left" doubleIcon />
      </div>
      {active > 1 ? (
        <div
          aria-hidden="true"
          className="flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full mr-6 prev arrow-icon"
          onClick={() => {
            onClickHandler(active - 1);
          }}
        >
          <ChevronIcon direction="left" />
        </div>
      ) : (
        <div className="flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full mr-6 prev arrow-icon disabled">
          <ChevronIcon direction="left" />
        </div>
      )}
      {size > showingNumbers + startNumber ? (
        <div className="flex gap-3.5">
          <div
            aria-hidden="true"
            className={`hidden medium:flex justify-center items-center border border-gray-200 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ${
              active === 1 ? "bg-primary-950 text-white" : "text-gray-500"
            }`}
            onClick={(e) => {
              onClickHandler(parseInt(e.currentTarget.textContent!, 10));
            }}
          >
            1
          </div>

          {needStartDots ? (
            <span className="hidden medium:flex self-end">...</span>
          ) : null}
          {Array.from({ length: showingNumbers }, (_, i) => {
            const contentNumber = needStartDots
              ? startArrayNumber
              : startNumber;
            startNumber++;
            startArrayNumber++;
            return (
              <div
                aria-hidden="true"
                className={`flex justify-center items-center border border-gray-200 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ${
                  active === contentNumber
                    ? "bg-primary-950 text-white"
                    : "text-gray-500"
                }`}
                key={i}
                onClick={(e) => {
                  onClickHandler(parseInt(e.currentTarget.textContent!, 10));
                }}
              >
                {contentNumber}
              </div>
            );
          })}
          {needEndDots ? (
            <span className="hidden medium:flex self-end">...</span>
          ) : null}
          <div
            aria-hidden="true"
            className={`hidden medium:flex justify-center items-center border border-gray-200 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ${
              active === size ? "bg-primary-950 text-white" : "text-gray-500"
            }`}
            onClick={(e) => {
              onClickHandler(parseInt(e.currentTarget.textContent!, 10));
            }}
          >
            {size}
          </div>
        </div>
      ) : (
        <div className="flex gap-3.5">
          {
            ((startArrayNumber = 1),
            Array.from({ length: size }, (_, i) => (
              <div
                aria-hidden="true"
                className={`flex justify-center items-center border border-gray-200 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ${
                  active === startArrayNumber && "bg-primary-950 text-white"
                }`}
                key={i}
                onClick={(e) => {
                  onClickHandler(parseInt(e.currentTarget.textContent!, 10));
                }}
              >
                {startArrayNumber++}
              </div>
            )))
          }
        </div>
      )}
      {active < size ? (
        <div
          aria-hidden="true"
          className="flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ml-6 next arrow-icon"
          onClick={() => {
            onClickHandler(active + 1);
          }}
        >
          <ChevronIcon direction="right" />
        </div>
      ) : (
        <div className="flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ml-6 next arrow-icon disabled">
          <ChevronIcon direction="right" />
        </div>
      )}
      <div
        aria-hidden="true"
        className="hidden medium:flex justify-center items-center border border-gray-500 hover:bg-primary-950 hover:text-white w-10 h-10 rounded-full ml-3 next arrow-icon"
        onClick={() => {
          onClickHandler(size);
        }}
      >
        <ChevronIcon direction="right" doubleIcon />
      </div>
    </div>
  );
};

export default PaginationSection;
