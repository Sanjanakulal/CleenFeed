
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PeopleIcon from '@mui/icons-material/People';
// import CategoryIcon from '@mui/icons-material/Category';
// import ReportIcon from '@mui/icons-material/Report';

// import { Link, Outlet } from 'react-router-dom';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: 0,
//     marginTop: 0,
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: open ? 0 : `-${drawerWidth}px`,
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   backgroundColor: "#2e2a72",
//   color: "#ffffff",
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   minHeight: "48px",
// }));

// export default function Sidebar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const menuItems = [
//     {
//       label: "Users",
//       link: "/Admin/ManageUser",
//       icon: <PeopleIcon />
//     },
//     {
//       label: "Category",
//       link: "/Admin/ManageCategory",
//       icon: <CategoryIcon />
//     },
//     {
//       label: "Reports",
//       link: "/Admin/ManageReports",
//       icon: <ReportIcon />
//     }
//   ];

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />

//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               mr: 2,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography variant="h6" noWrap component="div">
//             Admin
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr'
//               ? <ChevronLeftIcon />
//               : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>

//         <Divider />

//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component={Link} to="/Admin/AHome">
//               <ListItemIcon>
//                 <DashboardIcon />
//               </ListItemIcon>
//               <ListItemText primary="DASHBOARD" />
//             </ListItemButton>
//           </ListItem>
//         </List>

//         <Divider />

//         <List>
//           {menuItems.map((item) => (
//             <ListItem key={item.label} disablePadding>
//               <ListItemButton component={Link} to={item.link}>
//                 <ListItemIcon>
//                   {item.icon}
//                 </ListItemIcon>

//                 <ListItemText primary={item.label} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       <Main open={open}>
//         <DrawerHeader />
//         <Outlet />
//       </Main>
//     </Box>
//   );
// }
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
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 230;

/* MAIN */

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }) => ({

  flexGrow: 1,

  minHeight: '100vh',

  overflowX: 'hidden',

  transition: 'all 0.25s ease',

  marginLeft: open ? 0 : `-${drawerWidth}px`,

  background: `
    radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 20%),
    radial-gradient(circle at top right, rgba(139,92,246,0.10), transparent 20%),
    linear-gradient(180deg, #020617 0%, #0f172a 100%)
  `,
}));

/* APPBAR */

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }) => ({

  background: 'rgba(15,23,42,0.88)',

  backdropFilter: 'blur(18px)',

  borderBottom: '1px solid rgba(255,255,255,0.06)',

  color: '#ffffff',

  boxShadow: '0 10px 30px rgba(0,0,0,0.20)',

  transition: 'all 0.25s ease',

  ...(open && {

    width: `calc(100% - ${drawerWidth}px)`,

    marginLeft: `${drawerWidth}px`,
  }),
}));

const DrawerHeader = styled('div')(() => ({

  display: 'flex',

  alignItems: 'center',

  justifyContent: 'space-between',

  padding: '12px 14px',

  minHeight: '68px',
}));

export default function Sidebar() {

  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const menuItems = [

    {
      label: 'Users',
      link: '/Admin/ManageUser',
      icon: <PeopleRoundedIcon />
    },

    {
      label: 'Category',
      link: '/Admin/ManageCategory',
      icon: <CategoryRoundedIcon />
    },

    {
      label: 'Reports',
      link: '/Admin/ManageReports',
      icon: <ReportRoundedIcon />
    }
  ];

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      {/* TOPBAR */}

      <AppBar position="fixed" open={open}>

        <Toolbar

          sx={{

            minHeight: '68px !important',

            px: 2.5,

            display: 'flex',

            justifyContent: 'space-between'
          }}
        >

          {/* LEFT */}

          <Box

            sx={{

              display: 'flex',

              alignItems: 'center',

              gap: 1.8,
            }}
          >

            {/* MENU BUTTON */}

            <IconButton

              color="inherit"

              onClick={() => setOpen(!open)}

              edge="start"

              sx={{

                width: 40,

                height: 40,

                borderRadius: '12px',

                background: 'rgba(255,255,255,0.05)',

                border: '1px solid rgba(255,255,255,0.06)',

                '&:hover': {

                  background: 'rgba(255,255,255,0.10)',
                },
              }}
            >

              <MenuIcon />

            </IconButton>

            {/* LOGO */}

            <Box

              sx={{

                width: 38,

                height: 38,

                borderRadius: '12px',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                background: `
                  linear-gradient(
                    135deg,
                    #3b82f6,
                    #8b5cf6
                  )
                `,
              }}
            >

              <AdminPanelSettingsRoundedIcon
                sx={{ fontSize: 20 }}
              />

            </Box>

            {/* TITLE */}

            <Box>

              <Typography

                sx={{

                  fontWeight: 700,

                  fontSize: '18px',

                  lineHeight: 1.1,
                }}
              >
                CleanFeed Admin
              </Typography>

              <Typography

                sx={{

                  fontSize: '12px',

                  color: '#94a3b8',
                }}
              >
                Moderation & Management
              </Typography>

            </Box>

          </Box>


        </Toolbar>

      </AppBar>

      {/* SIDEBAR */}

      <Drawer

        variant="persistent"

        anchor="left"

        open={open}

        sx={{

          width: drawerWidth,

          flexShrink: 0,

          '& .MuiDrawer-paper': {

            width: drawerWidth,

            boxSizing: 'border-box',

            background: `
              linear-gradient(
                180deg,
                #0f172a 0%,
                #111827 100%
              )
            `,

            borderRight:
              '1px solid rgba(255,255,255,0.06)',

            color: '#fff',

            overflowX: 'hidden',

            boxShadow:
              '0 20px 40px rgba(0,0,0,0.25)',
          },
        }}
      >

        {/* HEADER */}

        <DrawerHeader>

          <Box

            sx={{

              display: 'flex',

              alignItems: 'center',

              gap: 1.2,
            }}
          >

            <Box

              sx={{

                width: 34,

                height: 34,

                borderRadius: '10px',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                background: `
                  linear-gradient(
                    135deg,
                    #3b82f6,
                    #8b5cf6
                  )
                `,
              }}
            >

              <AdminPanelSettingsRoundedIcon
                sx={{ fontSize: 18 }}
              />

            </Box>

            <Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '15px'
                }}
              >
                Admin Panel
              </Typography>

              <Typography
                sx={{
                  fontSize: '11px',
                  color: '#94a3b8'
                }}
              >
                Secure Dashboard
              </Typography>

            </Box>

          </Box>

          <IconButton

            onClick={() => setOpen(false)}

            sx={{

              color: '#fff',

              background: 'rgba(255,255,255,0.04)',

              border:
                '1px solid rgba(255,255,255,0.05)',

              '&:hover': {

                background: 'rgba(255,255,255,0.08)',
              }
            }}
          >

            {theme.direction === 'ltr'
              ? <ChevronLeftRoundedIcon />
              : <ChevronRightRoundedIcon />}

          </IconButton>

        </DrawerHeader>

        <Divider
          sx={{
            borderColor: 'rgba(255,255,255,0.06)'
          }}
        />

        {/* MENU */}

        <List sx={{ px: 1.2, py: 2 }}>

          {menuItems.map((item) => (

            <ListItem
              key={item.label}
              disablePadding
              sx={{ mb: 0.7 }}
            >

              <ListItemButton

                component={Link}

                to={item.link}

                sx={{

                  borderRadius: '14px',

                  py: 1.2,

                  px: 1.5,

                  transition: '0.2s ease',

                  '&:hover': {

                    background:
                      'rgba(255,255,255,0.05)',
                  }
                }}
              >

                <ListItemIcon

                  sx={{
                    color: '#cbd5e1',
                    minWidth: '38px'
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText

                  primary={item.label}

                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                />

              </ListItemButton>

            </ListItem>

          ))}

        </List>

        {/* FOOTER */}

        <Box

          sx={{

            mt: 'auto',

            p: 1.8,
          }}
        >

          <Box

            sx={{

              p: 1.8,

              borderRadius: '18px',

              background:
                'rgba(255,255,255,0.04)',

              border:
                '1px solid rgba(255,255,255,0.06)'
            }}
          >

            <Typography

              sx={{
                fontWeight: 700,
                fontSize: '14px',
                mb: 0.4
              }}
            >
              CleanFeed
            </Typography>

            <Typography

              sx={{
                fontSize: '12px',
                color: '#94a3b8',
                lineHeight: 1.7
              }}
            >
              Secure moderation system with modern admin controls.
            </Typography>

          </Box>

        </Box>

      </Drawer>

      {/* MAIN */}

      <Main open={open}>

        <Toolbar />

        <Box

          sx={{

            p: 2.5,

            width: '100%',

            boxSizing: 'border-box',
          }}
        >

          <Outlet />

        </Box>

      </Main>

    </Box>
  );
}