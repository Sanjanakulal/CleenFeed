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
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home Feed",  path: "/HomeFeed", icon: <HomeIcon   sx={{ fontSize: 16 }} /> },
  { name: "Create Post",path: "/Addpost",  icon: <AddBoxIcon sx={{ fontSize: 16 }} /> },
  { name: "My Posts",   path: "/MyPosts",  icon: <ArticleIcon sx={{ fontSize: 16 }} /> },
  { name: "About Us",   path: "/UAbout",  icon: <InfoIcon   sx={{ fontSize: 16 }} /> },
  { name: "FAQ",        path: "/Faq",     icon: <HelpIcon   sx={{ fontSize: 16 }} /> },
];

const token    = localStorage.getItem("UserToken");
const settings = token ? ['Profile', 'Logout'] : ['Login'];

 function TopBar() {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const [anchorElNav,  setAnchorElNav]  = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu  = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu  = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handlesettings = (set) => {
    if (set === 'Logout') {
      alert("are you sure want to logout?");
      localStorage.removeItem('UserToken');
      localStorage.removeItem('name');
      navigate("/Login");
    } else if (set === 'Profile') {
      navigate("/MyProfile");
    }
  };

  /* ─── shared dropdown paper style ─── */
  const dropPaper = {
    background: '#0d1525',
    border: '1px solid #1e3a5f',
    borderRadius: '14px',
    minWidth: 210,
    boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
    p: 0.5,
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        /* Solid blue-navy — clearly different from the #020617 page bg */
        background: '#0a1628',
        borderBottom: '1px solid #1e3a5f',
        boxShadow: '0 1px 0 #1e3a5f, 0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '72px' }}>

          {/* ══ LOGO — desktop ══ */}
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center', gap: 1.4,
              cursor: 'pointer', mr: 5, flexShrink: 0,
            }}
          >
            {/* Shield badge */}
            <Box sx={{
              width: 42, height: 42, borderRadius: '11px',
              background: 'linear-gradient(145deg,#1d4ed8,#2563eb)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 1px #3b82f644, 0 4px 14px #2563eb55',
            }}>
              <VerifiedUserIcon sx={{ color: '#fff', fontSize: 22 }} />
            </Box>

            <Box>
              <Typography sx={{
                fontWeight: 800, fontSize: '18px',
                color: '#f0f8ff', letterSpacing: '-0.025em', lineHeight: 1.1,
              }}>
                Clean<Box component="span" sx={{ color: '#3b82f6' }}>Feed</Box>
              </Typography>
              <Typography sx={{
                fontSize: '9px', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: '#3b82f6',
                opacity: 0.7, lineHeight: 1, mt: '3px',
              }}>
                Safe · Social · Trusted
              </Typography>
            </Box>
          </Box>

          {/* ══ Hamburger — mobile ══ */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: '#93c5fd' }}>
              <MenuIcon sx={{ fontSize: 26 }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              PaperProps={{ sx: { ...dropPaper, mt: 1.5 } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}
                  onClick={() => { navigate(page.path); handleCloseNavMenu(); }}
                  sx={{
                    color: '#93c5fd', fontSize: '14px',
                    borderRadius: '8px', gap: 1.5, my: 0.2,
                    '&:hover': { background: '#1e3a5f55', color: '#fff' },
                  }}
                >
                  <Box sx={{ color: '#3b82f6', display: 'flex' }}>{page.icon}</Box>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ══ Logo — mobile ══ */}
          <Box onClick={() => navigate("/")}
            sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center', gap: 1.2, cursor: 'pointer' }}
          >
            <Box sx={{
              width: 32, height: 32, borderRadius: '8px',
              background: 'linear-gradient(145deg,#1d4ed8,#2563eb)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <VerifiedUserIcon sx={{ color: '#fff', fontSize: 17 }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: '16px', color: '#f0f8ff', letterSpacing: '-0.02em' }}>
              Clean<Box component="span" sx={{ color: '#3b82f6' }}>Feed</Box>
            </Typography>
          </Box>

          {/* ══ Nav links — desktop ══ */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                startIcon={page.icon}
                sx={{
                  px: 2, py: 1,
                  color: '#93c5fd',
                  fontWeight: 500,
                  fontSize: '13.5px',
                  textTransform: 'none',
                  borderRadius: '9px',
                  letterSpacing: '0.01em',
                  transition: 'all 0.18s',
                  '& .MuiButton-startIcon': { mr: 0.6, opacity: 0.7 },
                  '&:hover': {
                    color: '#fff',
                    background: '#1e3a5f55',
                    '& .MuiButton-startIcon': { opacity: 1 },
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* ══ Right side ══ */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>

            {/* Online name pill */}
            {name && (
              <Box sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center', gap: 0.9,
                px: 1.6, py: 0.7,
                background: '#0d1e35',
                border: '1px solid #1e3a5f',
                borderRadius: '999px',
              }}>
                <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#22d3ee', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '13px', color: '#93c5fd', fontWeight: 600 }}>
                  {name}
                </Typography>
              </Box>
            )}

            {/* Avatar */}
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{
                  width: 40, height: 40,
                  fontWeight: 900,
                  fontSize: '16px',
                  color: '#fff',
                  background: 'linear-gradient(145deg,#1d4ed8,#3b82f6)',
                  border: '2px solid #1e3a5f',
                  boxShadow: '0 0 0 3px #3b82f622',
                }}>
                  {name?.charAt(0).toUpperCase() || 'U'}
                </Avatar>
              </IconButton>
            </Tooltip>

            {/* User dropdown */}
            <Menu
              sx={{ mt: '52px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{ sx: dropPaper }}
            >
              {name && (
                <Box sx={{
                  px: 2, py: 1.5, mb: 0.5,
                  borderBottom: '1px solid #1e3a5f',
                  display: 'flex', alignItems: 'center', gap: 1.5,
                }}>
                  <Avatar sx={{
                    width: 36, height: 36, fontWeight: 900, fontSize: 14,
                    color: '#fff',
                    background: 'linear-gradient(145deg,#1d4ed8,#3b82f6)',
                    border: '2px solid #1e3a5f',
                  }}>
                    {name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#f0f8ff', lineHeight: 1.2 }}>
                      {name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: '3px' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee' }} />
                      <Typography sx={{ fontSize: '11px', color: '#4a6fa5' }}>Online</Typography>
                    </Box>
                  </Box>
                </Box>
              )}

              {settings.map((setting) => (
                <MenuItem key={setting}
                  onClick={() => { handlesettings(setting); handleCloseUserMenu(); }}
                  sx={{
                    color: setting === 'Logout' ? '#f87171' : '#93c5fd',
                    fontSize: '13.5px',
                    borderRadius: '8px', gap: 1.5,
                    mx: 0.3, my: 0.2,
                    '&:hover': {
                      background: '#1e3a5f55',
                      color: setting === 'Logout' ? '#fca5a5' : '#fff',
                    },
                  }}
                >
                  {setting === 'Logout'
                    ? <LogoutIcon sx={{ fontSize: 15 }} />
                    : <PersonIcon sx={{ fontSize: 15 }} />}
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
export default TopBar
