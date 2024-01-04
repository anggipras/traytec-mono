// DataContext.tsx
import type { ReactNode } from "react";
import React, { createContext, useState, useContext } from "react";

interface DataContextProps {
  children: ReactNode;
}

interface FormDataProps {
  _typename: string | undefined;
  formDataValue: any;
}

interface DataContextValue {
  formData: FormDataProps[];
  setSharedFormData: (newData: FormDataProps[]) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormDataProps[]>([]);

  const setSharedFormData = (newData: FormDataProps[]) => {
    setFormData(newData);
  };

  return (
    <DataContext.Provider value={{ formData, setSharedFormData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
