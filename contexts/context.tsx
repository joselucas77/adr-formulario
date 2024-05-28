"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface AppContextType {
  activeTab: string;
  personal: boolean;
  church: boolean;
  finished: boolean;
  cont: number;
  setCont: React.Dispatch<React.SetStateAction<number>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: (form: string) => void;
  handlebeforeStep: (form: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [cont, setCont] = useState(0);

  const personal = activeTab === "personal";
  const church = activeTab === "church";
  const finished = activeTab === "finished";

  const handleNextStep = (form: string) => {
    setActiveTab(form);
    setCont(cont + 1);
  };

  const handlebeforeStep = (form: string) => {
    setActiveTab(form);
    setCont(cont + 1);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        church,
        personal,
        finished,
        handleNextStep,
        cont,
        setCont,
        handlebeforeStep,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
