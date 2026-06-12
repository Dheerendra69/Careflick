import {
  createContext,
  useContext,
  useState,
} from "react";

import type { User } from "../types/user";
import type { SubmittedForm } from "../types/form";

interface AppContextType {
  users: User[];

  setUsers:
    React.Dispatch<
      React.SetStateAction<User[]>
    >;

  forms: SubmittedForm[];

  setForms:
    React.Dispatch<
      React.SetStateAction<
        SubmittedForm[]
      >
    >;
}

const AppContext =
  createContext<AppContextType | null>(
    null
  );

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] =
    useState<User[]>([]);

  const [forms, setForms] =
    useState<SubmittedForm[]>([]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        forms,
        setForms,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context =
    useContext(AppContext);

  if (!context) {
    throw new Error(
      "AppContext not found"
    );
  }

  return context;
};