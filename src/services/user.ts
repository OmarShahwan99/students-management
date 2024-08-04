import httpClient from "../api/instance";
import { SignInRequest } from "../models/user";

export async function SignIn(data: SignInRequest) {
  const response = await httpClient.post<{ userName: string; token: string }>(
    "/User/SignIn",
    data
  );
  return response;
}
