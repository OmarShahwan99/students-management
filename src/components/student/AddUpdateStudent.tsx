import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form } from "../ui/forms/form";
import TextFieldController from "../ui/forms/text-field-controller";
import { useModalAction, useModalState } from "../ui/modal/modal.context";
import SelectFieldController from "../ui/forms/select-field-controller";
import * as yup from "yup";
import TextAreaController from "../ui/forms/textarea-field-controller";
import { StudentModel, StudentRequest } from "../../models/student";
import useAddStudent from "../../query/student/useAddStudent";
import { LoadingButton } from "@mui/lab";
import useUpdateStudent from "../../query/student/useUpdateStudent";
import { useSettings } from "../../contexts/settings.context";
import { useLanguage } from "../../contexts/language.context";
import { useTranslation } from "react-i18next";

const studentFormSchema = yup.object().shape({
  firstName: yup.string().required("student:firstNameRequired"),
  lastName: yup.string().required("student:lastNameRequired"),
  birthDate: yup.string().required("student:birthDateRequired"),
  grade: yup.string().required("student:gradeRequired"),
  gender: yup.string().required("student:genderRequired"),
  country: yup.string().required("student:countryRequired"),
  city: yup.string().required("student:cityRequired"),
  phone: yup.string().required("student:phoneRequired"),
  remarks: yup.string().optional(),
});

const StudentForm = ({
  defaultValues,
  onSubmit,
  isPending,
}: {
  defaultValues: StudentRequest | undefined;
  onSubmit: (values: StudentRequest) => void;
  isPending: boolean;
}) => {
  const { closeModal } = useModalAction();

  const { t } = useTranslation();

  const { getLocaleString } = useLanguage();

  const { grades, genders } = useSettings();

  const gradesOptions = grades?.map((grade) => ({
    value: grade.id,
    label: getLocaleString(grade.translations),
  }));
  const gendersOptions = genders?.map((gender) => ({
    value: gender.id,
    label: getLocaleString(gender.translations),
  }));
  return (
    <Form<StudentRequest>
      onSubmit={onSubmit}
      validationSchema={studentFormSchema}
      resetValues={defaultValues}
    >
      {({ control }) => (
        <>
          <DialogTitle>
            {defaultValues ? t("student:modify") : t("student:add")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="firstName"
                  label={t("student:firstName")}
                  textFieldProps={{
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="lastName"
                  label={t("student:lastName")}
                  textFieldProps={{
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="birthDate"
                  label={t("student:dateOfBirth")}
                  textFieldProps={{
                    type: "date",
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectFieldController
                  control={control}
                  name="grade"
                  label={t("student:educationLevel")}
                  options={gradesOptions}
                  selectProps={{
                    defaultValue: defaultValues?.grade,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectFieldController
                  control={control}
                  name="country"
                  label={t("student:country")}
                  options={[{ value: "egybt", label: "Egybt" }]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectFieldController
                  control={control}
                  name="city"
                  label={t("student:city")}
                  options={[{ value: "cairo", label: "Cairo" }]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="phone"
                  label={t("student:phone")}
                  textFieldProps={{
                    type: "tel",
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectFieldController
                  control={control}
                  name="gender"
                  label={t("student:gender")}
                  options={gendersOptions}
                  selectProps={{
                    defaultValue: defaultValues?.gender,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextAreaController
                  control={control}
                  name="remarks"
                  label={t("student:note")}
                  textFieldProps={{
                    style: { width: "100%" },
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <LoadingButton
              loading={isPending}
              type="submit"
              variant="contained"
              fullWidth
            >
              {defaultValues ? t("common:modify") : t("common:add")}
            </LoadingButton>
            <Button onClick={closeModal} variant="outlined" fullWidth>
              {t("common:cancel")}
            </Button>
          </DialogActions>
        </>
      )}
    </Form>
  );
};

const AddUpdateStudent = () => {
  const { closeModal } = useModalAction();
  const { data } = useModalState();

  const student: StudentModel = data;

  const add = useAddStudent();

  const update = useUpdateStudent();

  const onSubmit = (values: StudentRequest) => {
    if (student) {
      update.mutateAsync(values).then(() => {
        closeModal();
      });
    } else {
      add.mutateAsync(values).then(() => {
        closeModal();
      });
    }
  };

  const initialData: StudentRequest | undefined = student
    ? {
        ...student,
        gender: student?.gender.id,
        grade: student?.grade.id,
      }
    : undefined;

  return (
    <StudentForm
      defaultValues={initialData}
      isPending={add.isPending || update.isPending}
      onSubmit={onSubmit}
    />
  );
};

export default AddUpdateStudent;
