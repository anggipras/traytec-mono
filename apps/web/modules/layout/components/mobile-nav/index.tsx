import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { useMobileMenu } from "@/context/mobile-menu-context";

const MobileNav = ({ children }) => {
  const { toggleNav, setCloseNav } = useMobileMenu();
  return (
    <Transition.Root as={Fragment} show={toggleNav}>
      <Dialog
        as="div"
        className="fixed inset-x-0 bottom-0 top-[88px] z-20"
        onClose={setCloseNav}
      >
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-500 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute inset-0 bg-gray-50 pt-3.5 px-6 overflow-y-scroll">
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNav;
