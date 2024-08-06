import { TranslationModel } from "./common";

export interface StudentModel {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  grade: {
    id: string;
    translations: TranslationModel[];
  };
  gender: {
    id: string;
    translations: TranslationModel[];
  };
  country: string;
  city: string;
  phone: string;
  remarks: string;
}

export interface StudentRequest {
  firstName: string;
  lastName: string;
  birthDate: string;
  grade: string;
  gender: string;
  country: string;
  city: string;
  phone: string;
  remarks: string;
  id?: string;
}
