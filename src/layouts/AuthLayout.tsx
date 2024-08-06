import { Box, Container, Grid, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import AuthImgLayout from "../assets/auth-img-layout.svg";
import LanguageSwitcher from "../components/ui/language-switcher";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Box p={4} position="absolute">
        <LanguageSwitcher />
      </Box>
      <Grid
        item
        md={5.5}
        sx={{ minHeight: "100vh", display: { xs: "none", md: "block" } }}
      >
        <Container
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Stack
            bgcolor="#fff"
            alignItems="center"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
          >
            <Box maxWidth="420px">
              <img src={AuthImgLayout} style={{ width: "100%" }} />
            </Box>
          </Stack>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        md={6.5}
        sx={{
          backgroundImage: { md: "url('/src/assets/auth-bg.svg')" },
          backgroundColor: { xs: "#F3F6F9", md: "transparent" },
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
