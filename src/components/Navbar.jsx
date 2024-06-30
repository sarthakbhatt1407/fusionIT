import * as React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import logo from "../assets/logo.jpg";
import { Reorder } from "@mui/icons-material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { colors } from "../data";

function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const page = useLocation().pathname;

  const setPage = (page) => {
    if (page === "/") {
      setActive("home");
      return;
    }
    if (page === "/services") {
      setActive("services");
      return;
    }

    if (page === "/team") {
      setActive("team");
      return;
    }
    if (page === "/about-us") {
      setActive("about");
      return;
    }
    if (page === "/contact") {
      setActive("contact");
      return;
    }
  };

  React.useEffect(() => {
    setPage(page);
    return () => {};
  }, [page]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const w = window.screen.width;

  const logoStyle = {
    width: "5.8rem",
    height: "2.1rem",

    cursor: "pointer",
    margin: w < 901 ? " 0  4rem 0 1rem" : " 0  4rem 0 2rem",
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
      style={{ overflowX: "hidden" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "10px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.832)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: "-18px",
              px: 0,
            }}
          >
            <Link to="/">
              <img src={logo} style={logoStyle} alt="logo of sitemark" />
            </Link>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  paddingRight: "7rem",
                  gap: "1rem",
                },
              }}
            >
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{
                      color: active === "home" ? `${colors.mainColor}` : "",
                      fontSize: "1.1rem",
                      letterSpacing: "0.08rem",
                      transition: "all .5s",
                      transform: active === "home" ? "scale(1.05)" : "scale(1)",
                      marginRight: "0.7rem",
                      fontWeight: "550",
                      backfaceVisibility: "hidden",
                      textTransform: "capitalize",
                    }}
                  >
                    home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{
                      color: active === "services" ? `${colors.mainColor}` : "",
                      fontSize: "1.1rem",
                      letterSpacing: "0.08rem",
                      transition: "all .5s",
                      transform:
                        active === "services" ? "scale(1.05)" : "scale(1)",
                      marginRight: "0.7rem",
                      fontWeight: "550",
                      backfaceVisibility: "hidden",
                      textTransform: "capitalize",
                    }}
                  >
                    our services
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{
                      color: active === "team" ? `${colors.mainColor}` : "",
                      fontSize: "1.1rem",
                      letterSpacing: "0.08rem",
                      transition: "all .5s",
                      transform: active === "team" ? "scale(1.05)" : "scale(1)",
                      marginRight: "0.7rem",
                      fontWeight: "550",
                      backfaceVisibility: "hidden",
                      textTransform: "capitalize",
                    }}
                  >
                    team
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link to="/about-us" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{
                      color: active === "about" ? `${colors.mainColor}` : "",
                      fontSize: "1.1rem",
                      letterSpacing: "0.08rem",
                      transition: "all .5s",
                      transform:
                        active === "about" ? "scale(1.05)" : "scale(1)",
                      marginRight: "0.7rem",
                      fontWeight: "550",
                      backfaceVisibility: "hidden",
                      textTransform: "capitalize",
                    }}
                  >
                    about us
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{
                      color: active === "contact" ? `${colors.mainColor}` : "",
                      fontSize: "1.1rem",
                      letterSpacing: "0.08rem",
                      transition: "all .5s",
                      transform:
                        active === "contact" ? "scale(1.05)" : "scale(1)",
                      marginRight: "0.7rem",
                      fontWeight: "550",
                      backfaceVisibility: "hidden",
                      textTransform: "capitalize",
                    }}
                  >
                    contact
                  </Typography>
                </Link>
              </MenuItem>
            </Box>
          </Box>

          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <Reorder style={{ color: "black" }} />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                  }}
                ></Box>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.3rem",
                    }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link
                    to="/services"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.3rem",
                    }}
                  >
                    Our services
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link
                    to="/team"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.3rem",
                    }}
                  >
                    Team
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link
                    to="/about-us"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.3rem",
                    }}
                  >
                    About us
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.3rem",
                    }}
                  >
                    Contact
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
