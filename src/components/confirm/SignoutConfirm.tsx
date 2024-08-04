import { Logout } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useModalAction } from "../ui/modal/modal.context";
import { useToken } from "../../utils/hooks/use-token";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authorizationAtom } from "../../store/autorization-atom";
import { ROUTES } from "../../utils/routes";

const SignoutConfirm = () => {
  const { closeModal } = useModalAction();

  const navigate = useNavigate();

  const [_, setAuth] = useAtom(authorizationAtom);
  const { removeToken } = useToken();

  const handleLogout = () => {
    removeToken();
    setAuth(false);
    navigate(ROUTES.signin);
    closeModal();
  };
  return (
    <Box>
      <Box
        height="140px"
        bgcolor="#1F7BF4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ borderBottomLeftRadius: "11px", borderBottomRightRadius: "11px" }}
      >
        <Logout sx={{ color: "#fff", fontSize: "4rem" }} />
      </Box>
      <Box p={4} mt={2} textAlign="center">
        <Typography color="#1F7BF4" variant="h4">
          Sign out
        </Typography>
        <Typography variant="body2" color="#131212CC" mt={1}>
          Are you sure you would like to sign out of your account?
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            onClick={handleLogout}
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign out
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="outlined"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignoutConfirm;
