import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Role = "manager" | "superadmin" | "mediateam";

interface RoleSelectionContextType {
  currentRole: Role;
  setRole: (role: Role) => void;
}

const RoleSelectionContext = createContext<
  RoleSelectionContextType | undefined
>(undefined);

export const RoleSelectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentRole, setCurrentRole] = useState<Role>("manager");

  const setRole = (role: Role) => {
    setCurrentRole(role);
  };

  return (
    <RoleSelectionContext.Provider value={{ currentRole, setRole }}>
      {children}
    </RoleSelectionContext.Provider>
  );
};

export const useRoleSelection = () => {
  const context = useContext(RoleSelectionContext);
  if (context === undefined) {
    throw new Error(
      "useRoleSelection must be used within a RoleSelectionProvider",
    );
  }
  return context;
};
