import {
  School,
  Menu as MenuIcon,
  MenuBook,
  Logout,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import { useModalAction } from "../components/ui/modal/modal.context";
import LanguageSwitcher from "../components/ui/language-switcher";
import { useLanguage } from "../contexts/language.context";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  const { isRtl } = useLanguage();
  const { openModal } = useModalAction();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: drawerOpen && !isMobile ? "calc(100% - 250px)" : "100%",
          ml: drawerOpen && !isRtl && !isMobile ? "250px" : 0,
          mr: drawerOpen && isRtl && !isMobile ? "250px" : 0,
          backgroundColor: "#fff",
          boxShadow: "none",
          transition: "width 0.3s, margin 0.3s",
          color: "#000",
        }}
      >
        <Toolbar>
          <Stack direction="row" width="100%" justifyContent="space-between">
            {
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            }
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
          },
          display: { xs: isMobile ? "block" : "none", sm: "block" },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        anchor={isRtl ? "right" : "left"}
        open={drawerOpen}
        onClose={() => isMobile && setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          p="20px"
          display="flex"
          gap="10px"
          alignItems="center"
          fontWeight="bold"
        >
          <MenuBook />
          Logo
        </Box>
        <Divider />
        <List
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <ListItem selected sx={{ padding: "0" }}>
            <ListItemButton>
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText primary="students" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ padding: "0" }}>
            <ListItemButton
              onClick={() => openModal("SIGN_OUT_CONFIRM", {}, "xs")}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flex: 1,
          marginLeft: drawerOpen && !isRtl && !isMobile ? "250px" : "0",
          marginRight: drawerOpen && isRtl && !isMobile ? "250px" : "0",
          padding: "1rem",
          backgroundColor: "#F3F6F9",
          minHeight: "100vh",
          transition: "margin-left 0.3s",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
