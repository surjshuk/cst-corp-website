"use client";
import { createContext, useContext, useState } from "react";

type ContextType = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

const ActiveSectionContext = createContext<ContextType | undefined>(undefined);

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error("useActiveSection must be used inside provider");
  return ctx;
};
