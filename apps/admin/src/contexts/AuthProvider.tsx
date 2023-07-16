import React from "react";

import { LoginPage } from "pages";

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(
    localStorage.getItem("access_token") === null ? false : true
  );

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {authenticated ? <>{children}</> : <LoginPage />}
    </AuthContext.Provider>
  );
};
