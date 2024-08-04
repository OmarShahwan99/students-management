import { AUTH_TOKEN_KEY } from "../constants";

export function useToken() {
  return {
    setToken(token: string) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    },
    getToken() {
      return localStorage.getItem(AUTH_TOKEN_KEY);
    },
    removeToken() {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    },
    hasToken() {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      if (!token) return false;
      return true;
    },
  };
}
