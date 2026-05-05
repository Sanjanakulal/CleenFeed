// import React, { useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


// export default function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [login, setLogin] = useState({

//     email: '',
//     password: ''

//   })
//   const handlechange = (e) => {
//     console.log({ ...login, [e.target.name]: e.target.value })
//     setLogin({ ...login, [e.target.name]: e.target.value })

//   }

//   const handleLogin = () => {
//     console.log("Login details:", login)
//     axios.post('http://localhost:5000/user/Login', login)
//       .then((res) => {
//         console.log(res)
//         if (res.data.success) {
//           localStorage.setItem('UserToken', res.data.token)
//           localStorage.setItem('name', res.data.name)
//           localStorage.setItem('userid', res.data.userid)
//           alert("Login successful")
//           navigate('/HomeFeed')
//         }
//         else {
//           alert("Login Failed")
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//         alert("Login Failed")
//       })
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f1f5f9"
//       }}
//     >
//       <Paper
//         elevation={3}
//         style={{
//           width: "380px",
//           padding: "30px",
//           borderRadius: "10px"
//         }}
//       >
//         <Typography
//           variant='h4'
//           style={{
//             fontFamily: "Poppins",
//             textAlign: "center",
//             marginBottom: "20px"
//           }}
//         >
//           Login
//         </Typography>

//         <TextField
//           label="Email"
//           name="email"
//           fullWidth
//           onChange={handlechange}
//           sx={{ marginBottom: "15px" }}
//         />

//         <TextField
//           label="Password"
//           name="password"
//           type={showPassword ? "text" : "password"}   // 👁️ toggle
//           fullWidth
//           onChange={handlechange}
//           sx={{ marginBottom: "20px" }}

//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={() => setShowPassword(!showPassword)}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             )
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleLogin}
//           sx={{
//             backgroundColor: "#1e3a8a",
//             fontWeight: "600",
//             textTransform: "none",
//             '&:hover': {
//               backgroundColor: "#3749a5"
//             }
//           }}
//         >
//           Login
//         </Button>
//         <Typography
//           style={{
//             textAlign: "center",
//             marginTop: "15px"
//           }}
//         >
//           New User?{" "}
//           <a href="/" style={{ textDecoration: "none", color: "#1976d2" }}>
//             Create account
//           </a>
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';

const primary = "#2563eb";
const softBg = "#020617";
const cardBg = "#111827";
const lightText = "#cbd5f5";

/* 🔥 FIXED INPUT STYLE (AUTOFILL FIX INCLUDED) */
const inputSx = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#0f172a',
    fontSize: '0.9rem',
    color: '#fff',

    '& fieldset': { borderColor: '#1e293b' },
    '&:hover fieldset': { borderColor: primary },
    '&.Mui-focused fieldset': {
      borderColor: primary,
      borderWidth: '1.5px'
    },

    // 🔥 KEY FIX: Chrome autofill override
    '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #0f172a inset',
      WebkitTextFillColor: '#ffffff',
      transition: 'background-color 9999s ease-in-out 0s',
      borderRadius: '10px'
    }
  },

  '& .MuiInputLabel-root': {
    fontSize: '0.88rem',
    color: '#64748b',
    '&.Mui-focused': { color: primary },
  },

  '& .MuiInputBase-input': {
    color: '#fff',
  },

  '& .MuiIconButton-root': {
    color: '#64748b'
  }
};

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({ email: '', password: '' });

  const handlechange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios.post('http://localhost:5000/user/Login', login)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem('UserToken', res.data.token);
          localStorage.setItem('name', res.data.name);
          localStorage.setItem('userid', res.data.userid);
          alert("Login successful");
          navigate('/HomeFeed');
        } else {
          alert("Login Failed");
        }
      })
      .catch(() => {
        alert("Login Failed");
      });
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: softBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 400,
        background: cardBg,
        borderRadius: 4,
        p: 4,
        boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
      }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight={700} color="#fff">
            Welcome to <span style={{ color: primary }}>CleanFeed</span>
          </Typography>
          <Typography sx={{ mt: 1, fontSize: 13, color: lightText }}>
            Sign in to continue
          </Typography>
        </Box>

        <Box sx={{ height: '1px', background: '#1e293b', mb: 3 }} />

        {/* 🔥 Email */}
        <TextField
          label="Email"
          name="email"
          fullWidth
          size="small"
          autoComplete="off"   // 🔥 IMPORTANT
          onChange={handlechange}
          sx={inputSx}
        />

        {/* 🔥 Password */}
        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          size="small"
          autoComplete="new-password"   // 🔥 IMPORTANT
          onChange={handlechange}
          sx={{ ...inputSx, mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            py: 1.2,
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '0.9rem',
            backgroundColor: primary,
            '&:hover': {
              backgroundColor: '#1d4ed8',
              boxShadow: '0 0 15px rgba(37,99,235,0.4)',
            }
          }}
        >
          Login
        </Button>

        {/* Register */}
        <Typography sx={{
          textAlign: 'center',
          mt: 2,
          fontSize: '13px',
          color: lightText
        }}>
          New User?{' '}
          <Box
            component="span"
            onClick={() => navigate('/')}
            sx={{
              color: primary,
              cursor: 'pointer',
              fontWeight: 600,
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            Create account
          </Box>
        </Typography>

      </Box>
    </Box>
  );
}