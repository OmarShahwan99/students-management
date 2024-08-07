import httpClient from "../api/instance";
import { SettingModel } from "../models/settings";
import { ROUTES } from "../utils/routes";

export async function FetchGrades() {
  if (window.location.pathname !== ROUTES.signin) {
    const response = await httpClient.get<SettingModel[]>(
      "/Settings/GetAllGrades"
    );
    return response.data;
  }
}
export async function FetchGenders() {
  if (window.location.pathname !== ROUTES.signin) {
    const response = await httpClient.get<SettingModel[]>(
      "/Settings/GetAllGenders"
    );
    return response.data;
  }
}
