// import React, { useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import axios from 'axios'
// import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//   const navigate = useNavigate();
//   const [formdata,setFormdata] = useState({
//     name:'',
//     email:'',
//     password:'',
//     phone:'',
//     address:''
//   })
//   const handlechange =(e)=>{
//     console.log({...formdata, [e.target.name]:e.target.value})
//      setFormdata({...formdata ,[e.target.name]:e.target.value})

//   }

//   const handleregister =()=>{
//   console.log("form details:",formdata)
//   axios.post("http://localhost:5000/user/registeruser",formdata)  //axios.post() is asynchronous. It returns a Promise.
//   .then((res)=>{
//    console.log("registered user:" ,res.data)
//   //  alert("registered successfully")
//    alert(res.data.message)
//    navigate('/login')
//   })
//   .catch((error)=>{
//    console.log(error)
//   })

//     //using local storage
//     // const existingusers = JSON.parse(localStorage.getItem('userdetails')) || [];
//     // console.log(existingusers)
//     // const allusers =[...existingusers,formdata]

//     // localStorage.setItem('userdetails',JSON.stringify(allusers))
//     // alert("registration done!!")
//   }
//  return (
//   <Box
//     sx={{
//       minHeight: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "linear-gradient(135deg, #eef2ff, #f8fafc)"
//     }}
//   >
//     <Paper
//       elevation={0}
//       sx={{
//         width: 420,
//         p: 4,
//         borderRadius: "16px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 500,
//           mb: 3,
//           textAlign: "center",
//           color: "#0b0b0c",
//           fontFamily:"poppins"
//         }}
//       >
//         Create Account
//       </Typography>

//       <TextField
//         label="Full Name"
//         name="name"
//         fullWidth
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={handlechange}
//       />

//       <TextField
//         label="Email Address"
//         name="email"
//         type="email"
//         fullWidth
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={handlechange}
//       />

//       <TextField
//         label="Password"
//         name="password"
//         type="password"
//         fullWidth
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={handlechange}
//       />

//       <TextField
//         label="Phone Number"
//         name="phone"
//         fullWidth
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={handlechange}
//       />

//       <TextField
//         label="Address"
//         name="address"
//         multiline
//         rows={3}
//         fullWidth
//         size="small"
//         sx={{ mb: 3 }}
//         onChange={handlechange}
//       />

//       <Button
//         variant="contained"
//         fullWidth
//         onClick={handleregister}
//         sx={{
//           py: 1.2,
//           borderRadius: "8px",
//           textTransform: "none",
//           fontWeight: 600,
//           backgroundColor: "#1e3a8a",

//           '&:hover': {
//             backgroundColor: "#4338ca"
//           }
//         }}
//       >
//         Register
//       </Button>
//       <Typography
//   sx={{
//     textAlign: "center",
//     mt: 2
//   }}
// >
//   Already have an account?{" "}
//   <span
//     style={{ color: "#1976d2", cursor: "pointer", fontWeight: 500 }}
//     onClick={() => navigate('/Login')}
//   >
//     Login
//   </span>
// </Typography>
//     </Paper>
//   </Box>
// )
// }
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [formdata,setFormdata] = useState({
    name:'', email:'', password:'', phone:'', address:''
  })

  const handlechange =(e)=>{
     setFormdata({...formdata ,[e.target.name]:e.target.value})
  }

  const handleregister =()=>{
    axios.post("http://localhost:5000/user/registeruser",formdata)
    .then((res)=>{
      alert(res.data.message)
      navigate('/login')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

 return (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#020617"
    }}
  >
    <Paper
      elevation={0}
      sx={{
        width: 360,   // 🔥 reduced size
        p: 3,
        borderRadius: "16px",
        background: "#0f172a",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          color: "#fff"
        }}
      >
        Join <span style={{ color: "#2563eb" }}>CleanFeed</span>
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          mb: 2.5,
          fontSize: "13px",
          color: "#94a3b8"
        }}
      >
        Create your account
      </Typography>

      {/* Inputs */}
      <TextField label="Full Name" name="name" fullWidth size="small" sx={inputStyle} onChange={handlechange}/>
      <TextField label="Email Address"   autoComplete="off" name="email" type="email" fullWidth size="small" sx={inputStyle} onChange={handlechange}/>
      <TextField label="Password"   autoComplete="new-password" name="password" type="password" fullWidth size="small" sx={inputStyle} onChange={handlechange}/>
      <TextField label="Phone Number" name="phone" fullWidth size="small" sx={inputStyle} onChange={handlechange}/>
      <TextField label="Address" name="address" multiline rows={2} fullWidth size="small" sx={{ ...inputStyle, mb: 2 }} onChange={handlechange}/>

      {/* Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleregister}
        sx={{
          py: 1.1,
          borderRadius: "999px",
          fontWeight: 600,
          fontSize: "0.9rem",
          textTransform: "none",
          backgroundColor: "#2563eb",
          '&:hover': {
            backgroundColor: "#1d4ed8",
            boxShadow: "0 0 15px rgba(37,99,235,0.4)"
          }
        }}
      >
        Create Account
      </Button>

      {/* Bottom */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 1.8,
          fontSize: "13px",
          color: "#94a3b8"
        }}
      >
        Already have an account?{" "}
        <span
          onClick={() => navigate('/Login')}
          style={{
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Login
        </span>
      </Typography>
    </Paper>
  </Box>
 )
}

/* 🔥 FIXED INPUT STYLE (NO WHITE BACKGROUND) */
const inputStyle = {
  mb: 1.6,
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#020617',
    color: '#fff',

    '& fieldset': { borderColor: '#1e293b' },
    '&:hover fieldset': { borderColor: '#2563eb' },
    '&.Mui-focused fieldset': {
      borderColor: '#2563eb',
      borderWidth: '1.5px'
    },

    // 🔥 FIX AUTOFILL WHITE BACKGROUND
    '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #020617 inset',
      WebkitTextFillColor: '#ffffff',
      borderRadius: '8px',
    },
  },

  '& .MuiInputLabel-root': {
    color: '#64748b',
    fontSize: "0.85rem",
    '&.Mui-focused': { color: '#2563eb' },
  },

  '& .MuiInputBase-input': {
    color: '#fff',
    fontSize: "0.9rem"
  },
};
