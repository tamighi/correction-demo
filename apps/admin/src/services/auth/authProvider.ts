import { httpClient } from "../utils";

const apiUrl = process.env.BACKEND_URL;

export interface ICredentials {
  username: string;
  password: string;
}

export const authProvider = {
  login: async (credentials: ICredentials) => {
    const url = `${apiUrl}/auth/login`;
    const resp = await httpClient(url, {
      method: "post",
      body: JSON.stringify(credentials),
    });
    if (resp && typeof resp === "object" && "access_token" in resp) {
      localStorage.setItem("access_token", resp.access_token as string);
    }
  },
  logout: async () => {
    const url = `${apiUrl}/auth/logout`;
    httpClient(url, {
      method: "post",
    });
    localStorage.removeItem("access_token")
  },
};
