import { createContext, useContext, useState, type ReactNode } from "react";

interface CollapseContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
  setCollapsed: (value: boolean) => void;
}

const CollapseContext = createContext<CollapseContextType | undefined>(
  undefined
);

interface CollapseProviderProps {
  children: ReactNode;
}

export const CollapseProvider = ({ children }: CollapseProviderProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <CollapseContext.Provider value={{ collapsed, toggleSidebar, setCollapsed }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = () => {
  const context = useContext(CollapseContext);

  if (!context) {
    throw new Error("useCollapse must be used inside CollapseProvider");
  }

  return context;
};