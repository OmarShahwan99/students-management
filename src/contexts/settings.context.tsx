import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { SettingModel } from "../models/settings";
import useGrades from "../query/settings/useGrades";
import useGenders from "../query/settings/useGenders";

interface State {
  genders: SettingModel[];
  grades: SettingModel[];
}

const initialState: State = {
  genders: [],
  grades: [],
};

const SettingsContext = createContext<State>(initialState);

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: grades, isLoading: gradesLoading } = useGrades();
  const { data: genders, isLoading: gendersLoading } = useGenders();

  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    if (!gradesLoading && grades) {
      setState((prevState) => ({ ...prevState, grades }));
    }
  }, [grades, gradesLoading]);

  useEffect(() => {
    if (!gendersLoading && genders) {
      setState((prevState) => ({ ...prevState, genders }));
    }
  }, [genders, gendersLoading]);

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
