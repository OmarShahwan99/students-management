import httpClient from "../api/instance";
import { StudentModel } from "../models/student";

export async function FetchStudents() {
  const response = await httpClient.get<StudentModel[]>("/Student/GetAll");
  return response.data;
}
