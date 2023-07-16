import React from "react";
import { authProvider, ICredentials } from "services/auth";
import { useAuthContext } from "contexts";

export const useAuth = () => {
  const authContext = useAuthContext();

  const login = React.useCallback(
    async (credentials: ICredentials) => {
      try {
        await authProvider.login(credentials);
        authContext?.setAuthenticated(true);
      } catch (error) {
        throw error;
      }
    },
    [authContext]
  );

  const logout = React.useCallback(async () => {
    try {
      await authProvider.logout();
      authContext?.setAuthenticated(false);
    } catch (error) {
      throw error;
    }
  }, [authContext]);
  return { login, logout };
};
