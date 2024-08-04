import { Form } from "../ui/forms/form";
import { Stack } from "@mui/material";
import * as yup from "yup";
import TextFieldController from "../ui/forms/text-field-controller";
import PasswordFieldController from "../ui/forms/password-field-controller";
import { LoadingButton } from "@mui/lab";
import { SignInRequest } from "../../models/user";
import useSignin from "../../query/user/useSignin";

const SignInFormSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const { mutateAsync, isPending } = useSignin();

  const onSubmit = (values: SignInRequest) => {
    mutateAsync(values);
  };
  return (
    <Form<SignInRequest>
      onSubmit={onSubmit}
      validationSchema={SignInFormSchema}
    >
      {({ control }) => (
        <Stack flexDirection="column" width="100%" spacing={4}>
          <TextFieldController
            control={control}
            label="Username"
            name="userName"
          />
          <PasswordFieldController
            control={control}
            label="Password"
            name="password"
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loadingPosition="start"
            loading={isPending}
          >
            Sign In
          </LoadingButton>
        </Stack>
      )}
    </Form>
  );
};

export default SignIn;
