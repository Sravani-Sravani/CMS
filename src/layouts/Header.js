import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import AccountCircle from '@mui/icons-material/AccountCircle';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

import { ColorModeContext } from "../utils/ColorModeContext";
import DrawerMenu from './DrawerMenu'
import Avatar from '@mui/material/Avatar';
import logoImage from "../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logo_left from "../assets/images/logo_left.png";
import { grey, indigo } from '@mui/material/colors';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useLocation} from 'react-router-dom';
import { Stack } from '@mui/system';
const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [dark, setDark] = React.useState(false);
  const { toggleColorMode } = React.useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openE1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDarkMode = () => {
    setDark(!dark);
    toggleColorMode();
  };
  
  const getRouteTitle = () => {
    // var result = restaurants.filter(function (chain) {
    //   return chain.restaurant.food === "chicken";
    // })[0].restaurant.name;
  };
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ mr: 2, ...(!open && { display: "none" }) }}
          >
            <ChevronLeftIcon />
          </IconButton>
          {/* <IconButton sx={{ mr: 2, ...(!open && { display: "none" }) }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            {/* CMS {location.pathname} */}
            Change Management System
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleDarkMode}
              color="inherit"
            >
              {dark ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openE1}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box mr={1.5}>
          <Typography sx={{ py: 2, float: "left"}} display='flex' justifyContent ='space-between'>
            <img src={logo_left} width="50px" height='50px' />
            <Stack direction='column' py={1}>
            <Typography component="h1" variant="body2" color="#1964AF" fontSize='11px' fontWeight={700}>
              Dr.YSR Aarogyasri Health Care Trust
            </Typography>
            <Typography component="h1" variant="body2" color="#A5D73A" fontWeight={700} fontSize='11px' textAlign='center'>
              Government of Andhra Pradesh
            </Typography>
            </Stack>
          </Typography>
          </Box>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <DrawerMenu />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
