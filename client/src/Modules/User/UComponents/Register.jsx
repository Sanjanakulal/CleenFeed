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
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  })
  const handlechange =(e)=>{
    console.log({...formdata, [e.target.name]:e.target.value})
     setFormdata({...formdata ,[e.target.name]:e.target.value})

  }

  const handleregister =()=>{
  console.log("form details:",formdata)
  axios.post("http://localhost:5000/user/registeruser",formdata)  //axios.post() is asynchronous. It returns a Promise.
  .then((res)=>{
   console.log("registered user:" ,res.data)
  //  alert("registered successfully")
   alert(res.data.message)
   navigate('/login')
  })
  .catch((error)=>{
   console.log(error)
  })

    //using local storage
    // const existingusers = JSON.parse(localStorage.getItem('userdetails')) || [];
    // console.log(existingusers)
    // const allusers =[...existingusers,formdata]

    // localStorage.setItem('userdetails',JSON.stringify(allusers))
    // alert("registration done!!")
  }
 return (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #eef2ff, #f8fafc)"
    }}
  >
    <Paper
      elevation={0}
      sx={{
        width: 420,
        p: 4,
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          mb: 3,
          textAlign: "center",
          color: "#0b0b0c",
          fontFamily:"poppins"
        }}
      >
        Create Account
      </Typography>

      <TextField
        label="Full Name"
        name="name"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        onChange={handlechange}
      />

      <TextField
        label="Email Address"
        name="email"
        type="email"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        onChange={handlechange}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        onChange={handlechange}
      />

      <TextField
        label="Phone Number"
        name="phone"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        onChange={handlechange}
      />

      <TextField
        label="Address"
        name="address"
        multiline
        rows={3}
        fullWidth
        size="small"
        sx={{ mb: 3 }}
        onChange={handlechange}
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleregister}
        sx={{
          py: 1.2,
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          backgroundColor: "#1e3a8a",

          '&:hover': {
            backgroundColor: "#4338ca"
          }
        }}
      >
        Register
      </Button>
    </Paper>
  </Box>
)
}
