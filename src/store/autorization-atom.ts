import { atom } from "jotai";
import { AUTH_TOKEN_KEY } from "../utils/constants";

export function checkIsLoggedIn() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (!token) return false;
  return true;
}
export const authorizationAtom = atom(checkIsLoggedIn());
