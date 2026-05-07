// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Rating from '@mui/material/Rating';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { Button } from '@mui/material';

// export default function ManageUser() {
//     const [users, setUsers] = useState([])

//     useEffect(()=>{
//         axios.get('http://localhost:5000/user/getuser')
//         .then((res)=>{
//             console.log(res.data.allusers)
//             setUsers(res.data.allusers)
             
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
        
//     },[])
//    //uid id of the user
//     const HandleDelete =(uid)=>{
//       axios.delete(`http://localhost:5000/user/deleteuser/${uid}`)
//       .then((res)=>{
//        console.log(res)
//        alert("user deleted")
//       })
//       .catch((error)=>{
//        console.log(error)
//       })  
//     }

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>SL.No</TableCell>
//             <TableCell align="right">NAME</TableCell>
//             <TableCell align="right">EMAIL</TableCell>
//             <TableCell align="right">PHONE</TableCell>
//             <TableCell align="right">ADRESS</TableCell>
//             <TableCell align="center">ACTION</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map((row,index) => (
//             <TableRow
//               key={row._id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {index+1}
//               </TableCell>
//                <TableCell align="right">{row.name}</TableCell>
//               <TableCell align="right">{row.email}</TableCell>
//               <TableCell align="right">{row.phone}</TableCell>
//               <TableCell align="right">{row.address}</TableCell>
//              <TableCell align="center">
//               <Button variant='outlined'onClick={()=>HandleDelete(row._id)}>Delete</Button>
//              </TableCell>
             
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//         );
//     }
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState, useEffect } from 'react';

import axios from 'axios';

import {
  Button,
  Box,
  Typography,
} from '@mui/material';

export default function ManageUser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/user/getuser')

      .then((res) => {

        setUsers(res.data.allusers);

      })

      .catch((error) => {

        console.log(error);
      });

  }, []);

  const HandleDelete = (uid) => {

    axios.delete(`http://localhost:5000/user/deleteuser/${uid}`)

      .then(() => {

        setUsers((prev) =>
          prev.filter((user) => user._id !== uid)
        );
         alert("User deleted");

      })

      .catch((error) => {

        console.log(error);
      });
  };

  return (

    <Box>

      {/* TOP SECTION */}

      <Box

        sx={{

          mb: 3,

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: 2,
        }}
      >

        <Box>

          <Typography

            sx={{

              color: "#ffffff",

              fontSize: "28px",

              fontWeight: 700,

              letterSpacing: "-0.03em",
            }}
          >
            Users
          </Typography>

          <Typography

            sx={{

              color: "#94a3b8",

              fontSize: "14px",

              mt: 0.5
            }}
          >
            Manage registered platform users
          </Typography>

        </Box>

        {/* TOTAL USERS */}

        <Box

          sx={{

            px: 2,

            py: 1,

            borderRadius: "12px",

            background: "rgba(59,130,246,0.12)",

            border: "1px solid rgba(59,130,246,0.18)",

            color: "#93c5fd",

            fontSize: "14px",

            fontWeight: 600,
          }}
        >
          Total Users : {users.length}
        </Box>

      </Box>

      {/* TABLE */}

      <TableContainer

        component={Paper}

        sx={{

          background: "rgba(15,23,42,0.78)",

          border: "1px solid rgba(255,255,255,0.06)",

          borderRadius: "20px",

          overflow: "hidden",

          boxShadow: "0 20px 40px rgba(0,0,0,0.28)",

          backdropFilter: "blur(14px)",
        }}
      >

        <Table>

          {/* HEAD */}

          <TableHead>

            <TableRow

              sx={{

                background: "rgba(255,255,255,0.03)",
              }}
            >

              {[
                "SL.No",
                "Name",
                "Email",
                "Phone",
                "Address",
                "Action"
              ].map((item) => (

                <TableCell

                  key={item}

                  sx={{

                    color: "#94a3b8",

                    fontWeight: 700,

                    fontSize: "13px",

                    borderBottom:
                      "1px solid rgba(255,255,255,0.06)",

                    py: 2.2,
                  }}
                >
                  {item}
                </TableCell>

              ))}

            </TableRow>

          </TableHead>

          {/* BODY */}

          <TableBody>

            {users.map((row, index) => (

              <TableRow

                key={row._id}

                sx={{

                  transition: "0.25s ease",

                  '&:hover': {

                    background:
                      "rgba(255,255,255,0.025)",
                  }
                }}
              >

                <TableCell sx={cellStyle}>
                  {index + 1}
                </TableCell>

                <TableCell

                  sx={{

                    ...cellStyle,

                    color: "#ffffff",

                    fontWeight: 600
                  }}
                >
                  {row.name}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {row.email}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {row.phone}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {row.address}
                </TableCell>

                <TableCell sx={cellStyle}>

                  <Button

                    variant="contained"

                    color="error"

                    onClick={() => HandleDelete(row._id)}

                    sx={{

                      borderRadius: "10px",

                      textTransform: "none",

                      fontWeight: 600,

                      px: 2.5,

                      boxShadow: "none",

                      '&:hover': {

                        boxShadow: "none",
                      }
                    }}
                  >
                    Delete
                  </Button>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </Box>
  );
}

const cellStyle = {

  color: "#cbd5e1",

  borderBottom: "1px solid rgba(255,255,255,0.05)",

  py: 2,
};