import { Form } from "../ui/forms/form";
import { Box, Stack } from "@mui/material";
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
        <Stack width="100%" spacing={4}>
          <Box>
            <TextFieldController
              control={control}
              label="Username"
              name="userName"
              textFieldProps={{
                style: { width: "100%" },
              }}
            />
          </Box>
          <Box>
            <PasswordFieldController
              control={control}
              label="Password"
              name="password"
              textFieldProps={{
                style: { width: "100%" },
              }}
            />
          </Box>
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
