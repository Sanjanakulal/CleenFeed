// import React, { useEffect, useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import axios from 'axios'


// export default function MyProfile() {
//   const [formdata, setFormdata] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   })
//   const handlechange = (e) => {
//     console.log({ ...formdata, [e.target.name]: e.target.value })
//     setFormdata({ ...formdata, [e.target.name]: e.target.value })

//   }

//   const token = localStorage.getItem("UserToken")
//   console.log("usertoken details", token)


//   const viewprofile = async (req, res) => {
//     try {
//       const response = await fetch("http://localhost:5000/user/getprofile", { method: "GET", headers: { "auth-token": token } })

//       // axios.get("http://localhost:7000/user/getprofile",{headers:{"auth-token":token}})
//       const details = await response.json()
//       console.log(details.udata)
//       setFormdata(details.udata)

//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     viewprofile()
//   }, [])

//   const handleprofile = async (req,res) => {
//     try {
//       const response = await fetch("http://localhost:5000/user/updateprofile", { method: "PUT", body:JSON.stringify(formdata),headers: {"Content-Type":"application/json", "auth-token": token } })
//       const details = await response.json()
//       console.log(details.udetails)
//       setFormdata(details.udetails)
//       alert("Profile updated");
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({message:"server error"})
//     }
//   };


//   // return (
//   //   <div>
//   //     <Paper elevation={20} style={{ width: "550px", padding: "20px", margin: "50px auto" }}>
//   //       <Typography variant='h3' style={{ fontFamily: "poppins", textAlign: "center" }}>Update Profile</Typography>
//   //       <TextField variant='outlined' type='text' label='Name' name='name' value={formdata.name} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//   //       <TextField variant='outlined' type='email' label='Email' name='email' value={formdata.email} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//   //       <TextField variant='outlined' type='number' label='Phone' name='phone' value={formdata.phone} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//   //       <TextField variant='outlined' multiline rows={5} label='Address' name='address' value={formdata.address} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//   //       <Button variant='contained' fullWidth onClick={handleUpdate}>Update</Button>

//   //     </Paper>

//   //   </div>
//   // )
//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       background: "#f5f7fa"
//     }}>
//       <Paper
//         elevation={10}
//         style={{
//           width: "400px",
//           padding: "30px",
//           borderRadius: "12px"
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             textAlign: "center",
//             fontFamily: 'poppins',
//             marginBottom: "20px"
//           }}
//         >
//           Update Profile
//         </Typography>

//         <TextField
//           label="Name"
//           name="name"
//           value={formdata.name}
//           onChange={handlechange}
//           fullWidth
//           margin="normal"
//         />

//         <TextField
//           label="Email"
//           name="email"
//           value={formdata.email}
//           onChange={handlechange}
//           fullWidth
//           margin="normal"
//         />

//         <TextField
//           label="Phone"
//           name="phone"
//           value={formdata.phone}
//           onChange={handlechange}
//           fullWidth
//           margin="normal"
//         />

//         <TextField
//           label="Address"
//           name="address"
//           value={formdata.address}
//           onChange={handlechange}
//           multiline
//           rows={4}
//           fullWidth
//           margin="normal"
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleprofile}
//           sx={{
//             marginTop: 2,
//             padding: "10px",
//             fontWeight: "bold",
//             backgroundColor: "#0f467e",
//             "&:hover": {
//               backgroundColor: "#115293"
//             }
//           }}
//         >
//           Update
//         </Button>
//       </Paper>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

export default function MyProfile() {

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handlechange = (e) => {

    console.log({ ...formdata, [e.target.name]: e.target.value })

    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })

  }

  const token = localStorage.getItem("UserToken")

  console.log("usertoken details", token)

  const viewprofile = async (req, res) => {

    try {

      const response = await fetch(
        "http://localhost:5000/user/getprofile",
        {
          method: "GET",
          headers: {
            "auth-token": token
          }
        }
      )

      const details = await response.json()

      console.log(details.udata)

      setFormdata(details.udata)

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    viewprofile()

  }, [])

  const handleprofile = async (req, res) => {

    try {

      const response = await fetch(
        "http://localhost:5000/user/updateprofile",
        {
          method: "PUT",

          body: JSON.stringify(formdata),

          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          }
        }
      )

      const details = await response.json()

      console.log(details.udetails)

      setFormdata(details.udetails)

      alert("Profile updated")

    } catch (error) {

      console.log(error)

      res.status(500).json({ message: "server error" })

    }
  }

  return (

    <Box

      sx={{

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        minHeight: "calc(100vh - 90px)",

        paddingTop: "40px",

        paddingBottom: "40px",

        px: 2,

        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 25%),
          radial-gradient(circle at top right, rgba(139,92,246,0.14), transparent 25%),
          radial-gradient(circle at bottom left, rgba(34,211,238,0.10), transparent 20%),
          linear-gradient(180deg, #0f172a 0%, #020617 100%)
        `,
      }}
    >

      <Paper

        elevation={0}

        sx={{

          width: "100%",

          maxWidth: "420px",

          p: 2.6,

          borderRadius: "22px",

          background: `
            linear-gradient(
              180deg,
              rgba(15,23,42,0.88),
              rgba(17,24,39,0.92)
            )
          `,

          backdropFilter: "blur(16px)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: `
            0 20px 45px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.04)
          `,
        }}
      >

        {/* PROFILE HEADER */}

        <Box

          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2
          }}
        >

          <Avatar

            sx={{

              width: 64,
              height: 64,

              mb: 1.5,

              background: `
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #8b5cf6
                )
              `,

              boxShadow: "0 10px 24px rgba(59,130,246,0.35)",
            }}
          >

            <PersonRoundedIcon sx={{ fontSize: 32 }} />

          </Avatar>

          <Typography

            variant="h5"

            sx={{

              textAlign: "center",

              fontWeight: 800,

              color: "#f8fafc",

              letterSpacing: "-0.03em"
            }}
          >
            Update Profile
          </Typography>

          <Typography

            sx={{
              mt: 0.5,
              color: "#94a3b8",
              fontSize: "13px"
            }}
          >
            Manage your personal information
          </Typography>

        </Box>

        {/* NAME */}

        <TextField

          size="small"

          label="Name"

          name="name"

          value={formdata.name}

          onChange={handlechange}

          fullWidth

          margin="normal"

          InputLabelProps={{
            style: { color: "#94a3b8" }
          }}

          sx={{

            mb: 0.5,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#fff",

              background: "rgba(255,255,255,0.04)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* EMAIL */}

        <TextField

          size="small"

          label="Email"

          name="email"

          value={formdata.email}

          onChange={handlechange}

          fullWidth

          margin="normal"

          InputLabelProps={{
            style: { color: "#94a3b8" }
          }}

          sx={{

            mb: 0.5,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#fff",

              background: "rgba(255,255,255,0.04)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* PHONE */}

        <TextField

          size="small"

          label="Phone"

          name="phone"

          value={formdata.phone}

          onChange={handlechange}

          fullWidth

          margin="normal"

          InputLabelProps={{
            style: { color: "#94a3b8" }
          }}

          sx={{

            mb: 0.5,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#fff",

              background: "rgba(255,255,255,0.04)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* ADDRESS */}

        <TextField

          size="small"

          label="Address"

          name="address"

          value={formdata.address}

          onChange={handlechange}

          multiline

          rows={3}

          fullWidth

          margin="normal"

          InputLabelProps={{
            style: { color: "#94a3b8" }
          }}

          sx={{

            mb: 1.5,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#fff",

              background: "rgba(255,255,255,0.04)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* BUTTON */}

        <Button

          variant="contained"

          fullWidth

          onClick={handleprofile}

          sx={{

            py: 1.1,

            borderRadius: "14px",

            fontWeight: 700,

            fontSize: "14px",

            textTransform: "none",

            background: `
              linear-gradient(
                135deg,
                #3b82f6,
                #8b5cf6
              )
            `,

            boxShadow: "0 10px 24px rgba(59,130,246,0.35)",

            transition: "0.25s ease",

            '&:hover': {

              transform: "translateY(-2px)",

              background: `
                linear-gradient(
                  135deg,
                  #2563eb,
                  #7c3aed
                )
              `,
            }
          }}
        >
          Update Profile
        </Button>

      </Paper>

    </Box>
  )
}