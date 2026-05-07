// import React, { useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import axios from 'axios'


// export default function AddCategory() {
//   const [categorydata,setCategorydata] = useState({
//     category_name:'',
//     category_description:''
    
//   })
//   const handlechange =(e)=>{
//     console.log({...categorydata, [e.target.name]:e.target.value})
//      setCategorydata({...categorydata, [e.target.name]:e.target.value})

//   }

//   const handleregister =()=>{
//   console.log("category details:",categorydata)
//   axios.post("http://localhost:5000/category/addcategory",categorydata)
//   .then((res)=>{
//    console.log("registered user:" ,res.data)
//   //  alert("registered successfully")
//    alert(res.data.message)
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
//   return (
//     <div>
//       <Paper elevation={20} style={{width:"550px",padding:"20px",margin:"50px auto"}}>
//      <Typography variant='h3' style={{fontFamily:"poppins",textAlign:"center"}}>Add Category</Typography>
//      <TextField variant='outlined' type='text' label='Name' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
//      <TextField variant='outlined' multiline rows={5} label='Description' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
//     <Button variant='contained' fullWidth onClick={handleregister}>Add Category</Button>
//      </Paper>
      
//     </div>
//   )
// }
import React, { useState } from 'react'

import {
  Typography,
  Paper,
  TextField,
  Button,
  Box
} from '@mui/material'

import axios from 'axios'

export default function AddCategory() {

  const [categorydata, setCategorydata] = useState({

    category_name: '',

    category_description: ''

  })

  const handlechange = (e) => {

    console.log({
      ...categorydata,
      [e.target.name]: e.target.value
    })

    setCategorydata({
      ...categorydata,
      [e.target.name]: e.target.value
    })

  }

  const handleregister = () => {

    console.log("category details:", categorydata)

    axios.post(
      "http://localhost:5000/category/addcategory",
      categorydata
    )

    .then((res) => {

      console.log("registered user:", res.data)

      alert(res.data.message)

    })

    .catch((error) => {

      console.log(error)
    })
  }

  return (

    <Box

      sx={{

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        minHeight: "85vh",
      }}
    >

      <Paper

        elevation={0}

        sx={{

          width: "100%",

          maxWidth: "560px",

          p: 4,

          borderRadius: "22px",

          background: "rgba(15,23,42,0.78)",

          border:
            "1px solid rgba(255,255,255,0.06)",

          backdropFilter: "blur(14px)",

          boxShadow:
            "0 12px 30px rgba(0,0,0,0.22)",
        }}
      >

        {/* TITLE */}

        <Typography

          sx={{

            color: "#ffffff",

            fontSize: "28px",

            fontWeight: 700,

            mb: 0.5,

            letterSpacing: "-0.03em",
          }}
        >
          Add Category
        </Typography>

        <Typography

          sx={{

            color: "#94a3b8",

            fontSize: "14px",

            mb: 3,
          }}
        >
          Create a new content category
        </Typography>

        {/* NAME */}

        <TextField

          variant='outlined'

          type='text'

          label='Category Name'

          name='category_name'

          fullWidth

          onChange={handlechange}

          sx={{

            mb: 2.2,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#ffffff",

              background:
                "rgba(255,255,255,0.03)",

              '& fieldset': {

                borderColor:
                  "rgba(255,255,255,0.08)",
              },

              '&:hover fieldset': {

                borderColor:
                  "rgba(255,255,255,0.16)",
              },

              '&.Mui-focused fieldset': {

                borderColor: "#60a5fa",
              }
            },

            '& .MuiInputLabel-root': {

              color: "#94a3b8",
            },

            '& .MuiInputLabel-root.Mui-focused': {

              color: "#93c5fd",
            }
          }}
        />

        {/* DESCRIPTION */}

        <TextField

          variant='outlined'

          multiline

          rows={5}

          label='Category Description'

          name='category_description'

          fullWidth

          onChange={handlechange}

          sx={{

            mb: 3,

            '& .MuiOutlinedInput-root': {

              borderRadius: "14px",

              color: "#ffffff",

              background:
                "rgba(255,255,255,0.03)",

              '& fieldset': {

                borderColor:
                  "rgba(255,255,255,0.08)",
              },

              '&:hover fieldset': {

                borderColor:
                  "rgba(255,255,255,0.16)",
              },

              '&.Mui-focused fieldset': {

                borderColor: "#60a5fa",
              }
            },

            '& .MuiInputLabel-root': {

              color: "#94a3b8",
            },

            '& .MuiInputLabel-root.Mui-focused': {

              color: "#93c5fd",
            }
          }}
        />

        {/* BUTTON */}

        <Button

          variant='contained'

          fullWidth

          onClick={handleregister}

          sx={{

            height: "48px",

            borderRadius: "14px",

            textTransform: "none",

            fontSize: "15px",

            fontWeight: 600,

            background: `
              linear-gradient(
                135deg,
                #3b82f6,
                #8b5cf6
              )
            `,

            boxShadow: "none",

            '&:hover': {

              background: `
                linear-gradient(
                  135deg,
                  #2563eb,
                  #7c3aed
                )
              `,

              boxShadow: "none",
            }
          }}
        >
          Add Category
        </Button>

      </Paper>

    </Box>
  )
}