// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import { Navigate, useNavigate } from "react-router-dom";
// import logo from "../../../assets/logo.png"
// import ShieldIcon from '@mui/icons-material/Shield';

// const pages = [
//   { name: "Home Feed", path: "/HomeFeed" },
//   { name: "Create Post", path: "/Addpost" },
//   { name: "My Posts", path: "/MyPosts" },
//   { name: "About Us", path: "/UAbout" },
//   { name: "FAQ", path: "/Faq" }

// ];



// const token = localStorage.getItem("UserToken")
// console.log(token)

// const settings = token ? ['Profile', 'Logout'] : ['Login']
// function TopBar() {
//   const name = localStorage.getItem("name");
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handlesettings = (set) => {
//     if (set === 'Logout') {
//       alert("are you sure want to logout?")
//       localStorage.removeItem('UserToken')
//       localStorage.removeItem('name')
//       navigate("/Login")
//     } else if (set === 'Profile') {
//       navigate("/MyProfile")
//     }
//   }
//   return (
//     <AppBar
//       position="sticky"

//       sx={{
//         background: "#2e2a72",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
//       }}
//     >

//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ minHeight: "70px" }}>


//           <Box
//             onClick={() => navigate("/")}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               cursor: "pointer",
//               mr: 3
//             }}
//           >
//             <VerifiedUserIcon sx={{ color: "#fff", fontSize: 28 }} />

//             <Typography
//               sx={{
//                 ml: 1,
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 color: "#fff"
//               }}
//             >
//               CleenFeed
//             </Typography>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 onClick={() => navigate(page.path)}
//                 sx={{
//                   mx: 1,
//                   px: 2,
//                   color: "#e0e7ff",
//                   fontWeight: 500,
//                   fontSize: "14px",
//                   textTransform: "none",
//                   borderRadius: "6px",
//                   transition: "0.2s",

//                   '&:hover': {

//                     color: "#ffffff",
//                     backgroundColor: "rgba(255,255,255,0.05)"
//                   }
//                 }}
//               >
//                 {page.name}
//               </Button>
//             ))}
//           </Box>
//           <VerifiedUserIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             CleenFeed
//           </Typography>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//                 <Avatar sx={{ bgcolor: "#5c6bc0" }}>
//                   {name?.charAt(0).toUpperCase() || "U"}
//                 </Avatar>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={() => handlesettings(setting)}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default TopBar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home Feed", path: "/HomeFeed", icon: <HomeRoundedIcon sx={{ fontSize: 18 }} /> },
  { name: "Create Post", path: "/Addpost", icon: <AddBoxRoundedIcon sx={{ fontSize: 18 }} /> },
  { name: "My Posts", path: "/MyPosts", icon: <ArticleRoundedIcon sx={{ fontSize: 18 }} /> },
  { name: "About Us", path: "/UAbout", icon: <InfoRoundedIcon sx={{ fontSize: 18 }} /> },
  { name: "FAQ", path: "/Faq", icon: <HelpRoundedIcon sx={{ fontSize: 18 }} /> },
];

const token = localStorage.getItem("UserToken");
const settings = token ? ['Profile', 'Logout'] : ['Login'];

function TopBar() {

  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlesettings = (set) => {

    if (set === 'Logout') {

      alert("are you sure want to logout?");

      localStorage.removeItem('UserToken');
      localStorage.removeItem('name');

      navigate("/Login");

    }
    else if (set === 'Profile') {

      navigate("/MyProfile");

    }
    else if (set === 'Login') {

      navigate("/Login");

    }
  };

  const dropPaper = {
    background: 'rgba(10, 15, 30, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '20px',
    overflow: 'hidden',
    mt: 1.5,

    boxShadow: `
      0 20px 60px rgba(0,0,0,0.45),
      inset 0 1px 0 rgba(255,255,255,0.05)
    `,
  };

  return (

    <AppBar
      position="sticky"
      elevation={0}

      sx={{

        background: 'rgba(2, 6, 23, 0.72)',

        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',

        borderBottom: '1px solid rgba(255,255,255,0.06)',

        overflow: "hidden",

        '&::before': {

          content: '""',

          position: 'absolute',

          width: '400px',
          height: '400px',

          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',

          top: '-260px',
          left: '-100px',

          pointerEvents: 'none',
        },

        '&::after': {

          content: '""',

          position: 'absolute',

          width: '300px',
          height: '300px',

          background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',

          top: '-220px',
          right: '-80px',

          pointerEvents: 'none',
        },

        boxShadow: `
          0 8px 40px rgba(0,0,0,0.35),
          inset 0 -1px 0 rgba(255,255,255,0.03)
        `,
      }}
    >

      <Container maxWidth="xl">

        <Toolbar
          disableGutters

          sx={{
            minHeight: "92px",
            py: 1,
            position: "relative",
            zIndex: 5,
          }}
        >

          {/* DESKTOP LOGO */}

          <Box

            onClick={() => navigate("/")}

            sx={{
              display: { xs: 'none', md: 'flex' },

              alignItems: 'center',

              gap: 1.8,

              cursor: 'pointer',

              mr: 5,
            }}
          >

            <Box

              sx={{

                width: 48,
                height: 48,

                borderRadius: '16px',

                background: `
                  linear-gradient(
                    135deg,
                    #2563eb 0%,
                    #3b82f6 40%,
                    #8b5cf6 100%
                  )
                `,

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                position: 'relative',

                boxShadow: `
                  0 10px 30px rgba(59,130,246,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,

                '&::before': {

                  content: '""',

                  position: 'absolute',

                  inset: '-1px',

                  borderRadius: '16px',

                  padding: '1px',

                  background: `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.45),
                      rgba(255,255,255,0)
                    )
                  `,

                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',

                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }
              }}
            >

              <VerifiedUserIcon
                sx={{
                  color: "#fff",
                  fontSize: 24
                }}
              />

            </Box>

            <Box>

              <Typography

                sx={{
                  fontWeight: 900,
                  fontSize: '30px',
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-0.05em'
                }}
              >

                Clean

                <Box
                  component="span"

                  sx={{

                    background: `
                      linear-gradient(
                        135deg,
                        #60a5fa,
                        #8b5cf6
                      )
                    `,

                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Feed
                </Box>

              </Typography>

              <Typography

                sx={{
                  mt: "4px",

                  fontSize: '9px',

                  color: '#94a3b8',

                  letterSpacing: '0.28em',

                  textTransform: 'uppercase'
                }}
              >
                Safe • Modern • Trusted
              </Typography>

            </Box>

          </Box>

          {/* MOBILE MENU */}

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <IconButton

              onClick={handleOpenNavMenu}

              sx={{

                color: '#e2e8f0',

                background: 'rgba(255,255,255,0.04)',

                border: '1px solid rgba(255,255,255,0.06)',

                '&:hover': {

                  background: 'rgba(255,255,255,0.08)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}

              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}

              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}

              PaperProps={{
                sx: dropPaper
              }}
            >

              {pages.map((page) => (

                <MenuItem

                  key={page.name}

                  onClick={() => {

                    navigate(page.path);
                    handleCloseNavMenu();

                  }}

                  sx={{

                    color: '#cbd5e1',

                    gap: 1.5,

                    borderRadius: '12px',

                    mx: 1,
                    my: 0.5,

                    transition: '0.2s',

                    '&:hover': {

                      background: 'rgba(255,255,255,0.06)',

                      color: '#fff',

                      transform: 'translateX(4px)',
                    }
                  }}
                >

                  {page.icon}

                  {page.name}

                </MenuItem>
              ))}

            </Menu>

          </Box>

          {/* MOBILE LOGO */}

          <Box

            onClick={() => navigate("/")}

            sx={{
              display: { xs: 'flex', md: 'none' },

              alignItems: 'center',

              gap: 1.2,

              flexGrow: 1,

              ml: 1,

              cursor: 'pointer'
            }}
          >

            <Box

              sx={{

                width: 38,
                height: 38,

                borderRadius: '13px',

                background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                boxShadow: '0 8px 24px rgba(59,130,246,0.35)',
              }}
            >

              <VerifiedUserIcon
                sx={{
                  color: "#fff",
                  fontSize: 18
                }}
              />

            </Box>

            <Typography

              sx={{
                fontWeight: 800,
                color: '#fff',
                fontSize: '21px'
              }}
            >
              Clean

              <Box
                component="span"

                sx={{
                  color: '#60a5fa'
                }}
              >
                Feed
              </Box>

            </Typography>

          </Box>

          {/* NAV LINKS */}

          <Box

            sx={{
              flexGrow: 1,

              display: { xs: 'none', md: 'flex' },

              alignItems: 'center',

              gap: 1
            }}
          >

            {pages.map((page) => (

              <Button

                key={page.name}

                onClick={() => navigate(page.path)}

                startIcon={page.icon}

                sx={{

                  px: 2.2,
                  py: 1.1,

                  borderRadius: '14px',

                  color: '#cbd5e1',

                  textTransform: 'none',

                  fontWeight: 600,

                  fontSize: '14px',

                  position: 'relative',

                  overflow: 'hidden',

                  transition: 'all 0.25s ease',

                  '&::before': {

                    content: '""',

                    position: 'absolute',

                    inset: 0,

                    background: `
                      linear-gradient(
                        135deg,
                        rgba(59,130,246,0.16),
                        rgba(139,92,246,0.12)
                      )
                    `,

                    opacity: 0,

                    transition: '0.25s',
                  },

                  '&:hover': {

                    color: '#fff',

                    transform: 'translateY(-2px)',

                    border: '1px solid rgba(255,255,255,0.06)',

                    boxShadow: '0 10px 25px rgba(59,130,246,0.12)',

                    '&::before': {
                      opacity: 1
                    }
                  },

                  '& .MuiButton-startIcon': {

                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  {page.name}
                </Box>

              </Button>
            ))}

          </Box>

          {/* RIGHT SIDE */}

          <Box

            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}
          >

            {name && (

              <Box

                sx={{

                  display: { xs: 'none', md: 'flex' },

                  alignItems: 'center',

                  gap: 1,

                  px: 1.7,
                  py: 0.8,

                  borderRadius: '999px',

                  background: 'rgba(255,255,255,0.04)',

                  border: '1px solid rgba(255,255,255,0.06)',

                  backdropFilter: 'blur(12px)',
                }}
              >

                <Box

                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',

                    background: '#22d3ee',

                    boxShadow: '0 0 12px #22d3ee'
                  }}
                />

                <Typography

                  sx={{
                    color: '#e2e8f0',
                    fontWeight: 600,
                    fontSize: '13px'
                  }}
                >
                  {name}
                </Typography>

              </Box>
            )}

            {/* AVATAR */}

            <Tooltip title="Account">

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <Avatar

                  sx={{

                    width: 44,
                    height: 44,

                    background: `
                      linear-gradient(
                        135deg,
                        #3b82f6,
                        #8b5cf6
                      )
                    `,

                    fontWeight: 800,

                    border: '2px solid rgba(255,255,255,0.08)',

                    boxShadow: `
                      0 10px 25px rgba(59,130,246,0.35)
                    `,

                    transition: '0.25s',

                    '&:hover': {

                      transform: 'scale(1.05)',
                    }
                  }}
                >

                  {name?.charAt(0).toUpperCase() || "U"}

                </Avatar>

              </IconButton>

            </Tooltip>

            {/* USER MENU */}

            <Menu

              sx={{ mt: '55px' }}

              anchorEl={anchorElUser}

              open={Boolean(anchorElUser)}

              onClose={handleCloseUserMenu}

              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}

              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}

              PaperProps={{
                sx: dropPaper
              }}
            >

              {name && (

                <Box

                  sx={{
                    px: 2,
                    py: 2,

                    borderBottom: '1px solid rgba(255,255,255,0.06)',

                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >

                  <Avatar

                    sx={{

                      width: 40,
                      height: 40,

                      background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',

                      fontWeight: 800
                    }}
                  >

                    {name.charAt(0).toUpperCase()}

                  </Avatar>

                  <Box>

                    <Typography

                      sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '14px'
                      }}
                    >
                      {name}
                    </Typography>

                    <Typography

                      sx={{
                        color: '#94a3b8',
                        fontSize: '12px'
                      }}
                    >
                      Active User
                    </Typography>

                  </Box>

                </Box>
              )}

              {settings.map((setting) => (

                <MenuItem

                  key={setting}

                  onClick={() => {

                    handlesettings(setting);
                    handleCloseUserMenu();

                  }}

                  sx={{

                    mx: 1,
                    my: 0.5,

                    borderRadius: '12px',

                    color: setting === "Logout"
                      ? '#fca5a5'
                      : '#cbd5e1',

                    gap: 1.5,

                    transition: '0.2s',

                    '&:hover': {

                      background: 'rgba(255,255,255,0.06)',

                      color: '#fff',

                      transform: 'translateX(4px)',
                    }
                  }}
                >

                  {setting === "Logout"
                    ? <LogoutRoundedIcon sx={{ fontSize: 18 }} />
                    : <PersonRoundedIcon sx={{ fontSize: 18 }} />
                  }

                  {setting}

                </MenuItem>
              ))}

            </Menu>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
}

export default TopBar;


