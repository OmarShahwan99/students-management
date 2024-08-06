import httpClient from "../api/instance";
import { StudentModel, StudentRequest } from "../models/student";

export async function FetchStudents() {
  const response = await httpClient.get<StudentModel[]>("/Student/GetAll");
  return response.data;
}

export async function PostStudent(data: StudentRequest) {
  const response = await httpClient.post("/Student/Add", data);
  return response;
}
