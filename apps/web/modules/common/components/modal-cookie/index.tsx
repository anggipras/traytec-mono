/* eslint-disable @typescript-eslint/no-shadow -- disable no shadow */
/* eslint-disable array-callback-return -- disable array callback return */
/* eslint-disable jsx-a11y/label-has-associated-control -- disable label control */
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { compact } from "lodash";
import { useForm } from "react-hook-form";
import React, { Fragment, useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import Button from "../button";
import ChevronIcon from "../../icons/chevron";
import {
  Enum_Componentutilsbutton_Variante,
  type GetCookieModalQuery,
} from "@/generated/graphql";
import { setCookie } from "@/lib/util/cookie";

interface ModalCookieProps {
  data: GetCookieModalQuery;
  isOpen: boolean;
  close: () => void;
  size?: "small" | "medium" | "large";
}

const ModalCookie: React.FC<ModalCookieProps> = ({ data, isOpen, close }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isBottomReached, setIsBottomReached] = useState(true);

  const handleScroll = (e) => {
    const target = e.target;
    // Check if the user has scrolled to the bottom
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      // Set the state when the bottom is reached
      setIsBottomReached(true);
    }
  };

  const onSubmit = (formData: any) => {
    try {
      setCookie(`COS_ACCEPT_ALL`, Boolean(formData["accept-all"]), {
        maxAge: 60 * 60 * 24 * 365,
      });

      const acceptedCookies = compact(
        Object.entries(formData)
          .filter(([_, value]) => {
            return value;
          })
          .map(([key]) => {
            const categoryId = key.split("-")[2];
            const category = data?.cookieCategories?.data.find(
              (categ) => categ.id === categoryId
            );

            let categoryKey = category?.attributes?.name.toLowerCase();
            categoryKey = categoryKey?.split(" ").join("_");

            return categoryKey;
          })
      );

      for (const cookie of acceptedCookies) {
        setCookie(`COS_${cookie}`, true, { maxAge: 60 * 60 * 24 * 365 });
      }

      close();
    } catch (error) {
      console.log("error", error);
    }
  };

  const { cookiePopups: popups, cookieCategories: categories } = data;

  const handleAcceptAll = () => {
    categories?.data.map((category) => {
      setValue(`cookie-category-${category.id}-isenabled`, true);
    });
    setValue("accept-all", true);
    handleSubmit(onSubmit)();
  };

  const handleDeclineUnnecessary = () => {
    categories?.data.map((category, index) => {
      if (index === 0) {
        setValue(`cookie-category-${category.id}-isenabled`, true);
      } else {
        setValue(`cookie-category-${category.id}-isenabled`, false);
      }
    });
    handleSubmit(onSubmit)();
  };

  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/10 bg-opacity-90 transition-opacity backdrop-blur-sm border border-gray-200" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <svg
                      className="fill-primary-500"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.9 22.7C6 22.7 1.2 17.9 1.2 12 1.2 6.1 6 1.4 11.9 1.4c.9 0 1.9.1 2.8.4.1 0 .3.2.3.3 0 .2 0 .3-.1.4l-1.6 1.6c-.3.3-.4.7-.4 1.1 0 .4.2.8.4 1.1.4.4 1.1.6 1.7.3.2-.1.4 0 .5.1.1.1.2.3.1.5-.3.6-.1 1.2.3 1.7.4.4 1.1.5 1.7.3.2-.1.4 0 .5.1.1.1.2.3.1.5-.2.6-.1 1.2.3 1.7.6.6 1.6.6 2.1 0l1.1-1c.1-.1.3-.2.5-.1s.3.2.3.4c.1.5.1 1 .1 1.4 0 5.7-4.8 10.5-10.7 10.5zm0-20.4c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8v-.3l-.4.4c-.9.9-2.5.9-3.4 0-.5-.5-.8-1.2-.7-1.9-.7.1-1.4-.2-1.9-.7-.5-.5-.8-1.2-.7-1.9-.7.1-1.4-.2-1.9-.7-.5-.4-.7-1-.7-1.7s.2-1.3.7-1.7l1-1.1c-.6-.2-1.2-.2-1.8-.2z" />
                      <path d="M9.2 11.6c-1 0-1.8-.8-1.8-1.8S8.2 8 9.2 8s1.8.8 1.8 1.7c-.1 1.1-.9 1.9-1.8 1.9zm0-2.7c-.5 0-.8.4-.8.9s.4.9.8.9c.5 0 .9-.4.9-.9-.1-.5-.5-.9-.9-.9zM6.7 15.1c-.5 0-1-.4-1-.9s.4-1 1-1c.5 0 1 .4 1 1 0 .4-.4.9-1 .9zM12.7 19.5c-.8 0-1.5-.7-1.5-1.6s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.6-1.5 1.6zm0-2.1c-.3 0-.6.3-.6.6s.3.7.6.7.6-.3.6-.7-.3-.6-.6-.6zM14.9 14.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
                    </svg>
                  </div>
                  <div className="mt-2 small:mt-5">
                    <Dialog.Title as="h2" className="typo-h2 text-center">
                      {popups?.data?.[0]?.attributes?.title}
                    </Dialog.Title>
                    <div className="py-5">
                      <div
                        className="text-gray-600 text-xs max-h-[360px] overflow-y-auto"
                        dangerouslySetInnerHTML={{
                          __html:
                            popups?.data[0]?.attributes?.description || "",
                        }}
                        onScroll={handleScroll}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <form id="cookie-form">
                    {categories?.data?.map((category) => {
                      return (
                        <div key={category.id}>
                          <input
                            defaultChecked
                            id={`cookie-category-${category.id}-isenabled`}
                            type="checkbox"
                            {...register(
                              `cookie-category-${category.id}-isenabled`
                            )}
                            className="hidden group-first:cursor-not-allowed"
                          />
                        </div>
                      );
                    })}
                  </form>
                </div>
                {!isBottomReached && (
                  <p className="typo-copy-small text-rose-700">
                    Please read our cookie policy until the end.
                  </p>
                )}
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <Button
                    disabled={!isBottomReached}
                    onClick={handleAcceptAll}
                    variant={Enum_Componentutilsbutton_Variante.Primary}
                    width="w-full"
                  >
                    Allow All
                  </Button>

                  <Button
                    disabled={!isBottomReached}
                    onClick={handleDeclineUnnecessary}
                    variant={Enum_Componentutilsbutton_Variante.Text}
                    width="w-full"
                  >
                    Accept only necessary
                  </Button>
                </div>
                <div className="mt-5 sm:mt-6 w-full">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between gap-x-2 items-center px-4 py-2 text-left typo-h3 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75  w-full">
                          <span>Manage cookies</span>
                          <div className={open ? "rotate-180 transform" : ""}>
                            <ChevronIcon direction="up" size="30" />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-4 pb-2 typo-copy-small text-gray-500">
                          {/* Category mapping */}
                          {categories?.data?.map((category) => {
                            return (
                              <Disclosure key={category.id}>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="group flex w-full justify-between gap-x-3 items-center px-4 py-2 text-left typo-copy-normal-bold transition-colors bg-primary-50 hover:bg-primary-100 focus:outline-none focus-visible:ring focus-visible:ring-tumbleweed-500 focus-visible:ring-opacity-75">
                                      <div className="flex items-center gap-x-3">
                                        {!open ? (
                                          <Image
                                            alt="ic_plus"
                                            src={require("@/assets/images/icons/ic_plus.svg")}
                                          />
                                        ) : (
                                          <Image
                                            alt="ic_minus"
                                            src={require("@/assets/images/icons/ic_minus.svg")}
                                          />
                                        )}
                                        <p>
                                          {category.attributes?.name}
                                          {category?.attributes?.cookies
                                            ?.data &&
                                            category?.attributes?.cookies?.data
                                              ?.length > 0 && (
                                              <span className="ml-3 opacity-75">
                                                {
                                                  category.attributes?.cookies
                                                    ?.data.length
                                                }
                                              </span>
                                            )}
                                        </p>
                                      </div>
                                      <div className="group-first:cursor-not-allowed group-first:pointer-events-none">
                                        <label
                                          className="inline-block"
                                          htmlFor={`cookie-category-${category.id}-isenabled`}
                                        >
                                          <div
                                            className={clsx(
                                              watch(
                                                `cookie-category-${category.id}-isenabled`
                                              ) === true
                                                ? "bg-primary-600"
                                                : "bg-gray-200",
                                              "group-first:cursor-not-allowed group-first:opacity-50 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            )}
                                          >
                                            <span className="sr-only">
                                              Use {category.attributes?.name}
                                            </span>
                                            <span
                                              className={clsx(
                                                watch(
                                                  `cookie-category-${category.id}-isenabled`
                                                ) === true
                                                  ? "translate-x-5"
                                                  : "translate-x-0",
                                                "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                              )}
                                            >
                                              <span
                                                aria-hidden="true"
                                                className={clsx(
                                                  watch(
                                                    `cookie-category-${category.id}-isenabled`
                                                  ) === true
                                                    ? "opacity-0 ease-out duration-100"
                                                    : "opacity-100 ease-in duration-200",
                                                  "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                                )}
                                              >
                                                <svg
                                                  className="h-3 w-3 text-gray-400"
                                                  fill="none"
                                                  viewBox="0 0 12 12"
                                                >
                                                  <path
                                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                  />
                                                </svg>
                                              </span>
                                              <span
                                                aria-hidden="true"
                                                className={clsx(
                                                  watch(
                                                    `cookie-category-${category.id}-isenabled`
                                                  ) === true
                                                    ? "opacity-100 ease-in duration-200"
                                                    : "opacity-0 ease-out duration-100",
                                                  "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                                )}
                                              >
                                                <svg
                                                  className="h-3 w-3 text-primary-600"
                                                  fill="currentColor"
                                                  viewBox="0 0 12 12"
                                                >
                                                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                </svg>
                                              </span>
                                            </span>
                                          </div>
                                        </label>
                                      </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                                      <span>
                                        {category.attributes?.description}
                                      </span>
                                      <div className="flex flex-col gap-y-2 my-5">
                                        {/* Cookies Mapping */}
                                        {category.attributes?.cookies?.data.map(
                                          ({ id, attributes: cookie }) => {
                                            return (
                                              <div
                                                className="border border-primary-200 hover:border-tumbleweed-300"
                                                key={id}
                                              >
                                                <Disclosure key={category.id}>
                                                  {({ open }) => (
                                                    <>
                                                      <Disclosure.Button className="flex w-full justify-between gap-x-3 items-center px-4 py-3 text-left typo-copy-small-bold text-gray-700 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-tumbleweed-500 focus-visible:ring-opacity-75">
                                                        <div className="flex flex-row w-full justify-between gap-x-3">
                                                          <span>
                                                            {cookie?.name}
                                                          </span>
                                                          <div
                                                            className={
                                                              open
                                                                ? "rotate-180 transform"
                                                                : ""
                                                            }
                                                          >
                                                            <ChevronIcon direction="up" />
                                                          </div>
                                                        </div>
                                                      </Disclosure.Button>
                                                      <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-500">
                                                        <span className="block typo-copy-small-bold">
                                                          {cookie?.host}
                                                        </span>
                                                        <span className="block mt-2 text-gray-500">
                                                          {cookie?.description}
                                                        </span>
                                                        <div className="flex flex-row w-full justify-start gap-x-5 my-3 text-gray-400">
                                                          <div>
                                                            <span>
                                                              <span className="font-bold">
                                                                Expiry:
                                                              </span>
                                                              &nbsp;
                                                              {cookie?.duration
                                                                .days &&
                                                                cookie?.duration
                                                                  .days}{" "}
                                                              Days
                                                            </span>
                                                          </div>
                                                          <div>
                                                            <span>
                                                              <span className="font-bold">
                                                                Type:
                                                              </span>
                                                              &nbsp;
                                                              {cookie?.party &&
                                                                cookie?.party}
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </Disclosure.Panel>
                                                    </>
                                                  )}
                                                </Disclosure>
                                              </div>
                                            );
                                          }
                                        )}
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            );
                          })}

                          <div className="mt-5">
                            <Button
                              disabled={!isBottomReached}
                              onClick={() => {
                                handleSubmit(onSubmit)();
                              }}
                              width="w-full"
                            >
                              Save Cookie Settings
                            </Button>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalCookie;
