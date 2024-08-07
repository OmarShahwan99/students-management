import { Box, Typography } from "@mui/material";
import LoginForm from "../../components/auth/login-form";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <Box
      bgcolor="#fff"
      p={5}
      borderRadius={2}
      width={{ xs: "100%", sm: "80%" }}
    >
      <Typography variant="h4" mb={3}>
        {t("auth:signIn")}
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;
