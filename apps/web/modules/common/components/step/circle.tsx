/* eslint-disable no-nested-ternary -- disable nested ternary */
import Image from "next/image";

interface Step {
  data?: { status: "complete" | "current" | "upcoming" }[];
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const CircleStep = ({ data }: Step) => {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {data?.map((step, stepIdx) => (
          <li
            className={classNames(
              stepIdx !== data.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
            key={stepIdx}
          >
            {step.status === "complete" ? (
              <>
                <div aria-hidden className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-primary-700" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 hover:bg-indigo-900">
                  <Image
                    alt="ic_check"
                    className="w-5 h-5"
                    src={require("@/assets/images/icons/ic_check.svg")}
                  />
                  <span className="sr-only">{stepIdx}</span>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-700 bg-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-primary-700"
                  />
                  <span className="sr-only">{stepIdx}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  />
                  <span className="sr-only">{stepIdx}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default CircleStep;
