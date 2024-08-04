// import { UserModel } from "../api/types/user";
import { atomWithStorage } from "jotai/utils";
import { USER_KEY } from "../utils/constants";

export const userAtom = atomWithStorage<any | null>(USER_KEY, null);
