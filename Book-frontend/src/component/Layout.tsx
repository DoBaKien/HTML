import { Outlet, Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import {
  Box,
  InputAdornment,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import "./style.css";

interface HideOnScrollProps {
  children: React.ReactElement;
  window?: () => Window;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};
const Layout: React.FC = (props) => {
  return (
    <Box sx={{ backgroundColor: "#F0F0F0" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Container>
              <Stack direction="row" className="stack" spacing={5}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "700", color: "red" }}
                >
                  Fahasa
                </Typography>
                <InputBase
                  className="input-search"
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <Box className="box-icon">
                        <SearchIcon sx={{ color: "white" }} />
                      </Box>
                    </InputAdornment>
                  }
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <Link className="icon-act" to="">
                  <NotificationsIcon />
                  <span className="sub">Thông báo</span>
                </Link>
                <Link className="icon-act" to="">
                  <ShoppingCartIcon />
                  <span className="sub">Giỏ hàng</span>
                </Link>
                <Link className="icon-act" to="/Login">
                  <PersonIcon />
                  <span className="sub">Tài khoản</span>
                </Link>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Container style={{ padding: 30 }}>
        <Outlet />
      </Container>
      <Container>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Container>
    </Box>
  );
};

export default Layout;
