import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Cart from "~/components/MainLayout/components/Cart";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const auth = true;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            sx={{ color: "inherit" }}
            underline="none"
            to="/"
          >
            Welcome to my store!{" "}
            <svg
              style={{ verticalAlign: "middle" }}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-building-store"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <line x1="5" y1="21" x2="5" y2="10.85"></line>
              <line x1="19" y1="21" x2="19" y2="10.85"></line>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
          </Link>
        </Typography>

        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              size="large"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                component={RouterLink}
                to="/admin/orders"
                onClick={handleClose}
              >
                Manage orders
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/admin/products"
                onClick={handleClose}
              >
                Manage products
              </MenuItem>
            </Menu>
          </div>
        )}
        <Cart />
      </Toolbar>
    </AppBar>
  );
}
