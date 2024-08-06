import httpClient from "../api/instance";
import { SettingModel } from "../models/settings";

export async function FetchGrades() {
  const response = await httpClient.get<SettingModel[]>(
    "/Settings/GetAllGrades"
  );
  return response.data;
}
export async function FetchGenders() {
  const response = await httpClient.get<SettingModel[]>(
    "/Settings/GetAllGenders"
  );
  return response.data;
}
