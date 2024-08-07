import { Form } from "../ui/forms/form";
import { Box, Stack } from "@mui/material";
import * as yup from "yup";
import TextFieldController from "../ui/forms/text-field-controller";
import PasswordFieldController from "../ui/forms/password-field-controller";
import { LoadingButton } from "@mui/lab";
import { SignInRequest } from "../../models/user";
import useSignin from "../../query/user/useSignin";
import { useTranslation } from "react-i18next";

const SignInFormSchema = yup.object().shape({
  userName: yup.string().required("auth:usernameRequired"),
  password: yup.string().required("auth:passwordRequired"),
});

const SignIn = () => {
  const { mutateAsync, isPending } = useSignin();

  const { t } = useTranslation();

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
              label={t("auth:username")}
              name="userName"
              textFieldProps={{
                style: { width: "100%" },
              }}
            />
          </Box>
          <Box>
            <PasswordFieldController
              control={control}
              label={t("auth:password")}
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
            {t("auth:signIn")}
          </LoadingButton>
        </Stack>
      )}
    </Form>
  );
};

export default SignIn;
