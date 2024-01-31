import React, { createContext, useContext, useState } from "react";

interface DataContextProps {
  children: React.ReactNode;
}

interface DataContextValue {
  toggleNav: boolean;
  setOpenNav: () => void;
  setCloseNav: () => void;
}

const DataContext = createContext<DataContextValue | null>(null);

const MobileMenuContext: React.FC<DataContextProps> = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const setOpenNav = () => {
    setToggleNav(true);
  };

  const setCloseNav = () => {
    setToggleNav(false);
  };

  return (
    <DataContext.Provider value={{ toggleNav, setOpenNav, setCloseNav }}>
      {children}
    </DataContext.Provider>
  );
};

export const useMobileMenu = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a DataProvider");
  }
  return context;
};

export default MobileMenuContext;
