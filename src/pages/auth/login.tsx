import { Box, Typography } from "@mui/material";
import LoginForm from "../../components/auth/login-form";

const Login = () => {
  return (
    <Box
      bgcolor="#fff"
      p={5}
      borderRadius={2}
      width={{ xs: "100%", sm: "80%" }}
    >
      <Typography variant="h4" mb={3}>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;
