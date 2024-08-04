import { Box, Container, Grid, Select, MenuItem, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import AuthImgLayout from "../assets/auth-img-layout.svg";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        item
        md={5.5}
        sx={{ minHeight: "100vh", display: { xs: "none", md: "block" } }}
      >
        <Container
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Box p={4}>
            <Select
              labelId="language-select-label"
              id="language-select"
              label="Language"
              size="small"
              value="en"
              sx={{ width: "120px" }}
            >
              <MenuItem value="en">English</MenuItem>
            </Select>
          </Box>
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
          backgroundImage: "url('/src/assets/auth-bg.svg')",
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
