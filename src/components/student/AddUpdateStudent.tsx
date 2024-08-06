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

const studentFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  birthDate: yup.string().required("Date of Birth is required"),
  grade: yup.string().required("Grade is required"),
  gender: yup.string().required("Gender is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  phone: yup.string().required("Phone is required"),
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
            {defaultValues ? "Modify Student Data" : "Add Student"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="firstName"
                  label="First Name *"
                  textFieldProps={{
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="lastName"
                  label="Last Name *"
                  textFieldProps={{
                    style: { width: "100%" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="birthDate"
                  label="Date of Birth *"
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
                  label="Education Level *"
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
                  label="Country *"
                  options={[{ value: "egybt", label: "Egybt" }]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectFieldController
                  control={control}
                  name="city"
                  label="City *"
                  options={[{ value: "cairo", label: "Cairo" }]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldController
                  control={control}
                  name="phone"
                  label="Mobile *"
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
                  label="Gender *"
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
                  label="Note"
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
              {defaultValues ? "Modify" : "Add"}
            </LoadingButton>
            <Button onClick={closeModal} variant="outlined" fullWidth>
              Cancel
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
