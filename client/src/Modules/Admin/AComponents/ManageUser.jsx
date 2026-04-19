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
import { Button, Box, Typography } from '@mui/material';

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
      .then((res) => {
        console.log(res);
        alert("User Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f4f6f9",
        p: 4
      }}
    >
      {/* Heading
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#1e3a8a",
          mb: 3,
        }}
      >
        Manage Users
      </Typography> */}

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          overflow: "hidden"
        }}
      >
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow sx={{ background: "#334155"}}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>SL.No</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>NAME</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>EMAIL</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>PHONE</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ADDRESS</TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((row, index) => (
              <TableRow
                key={row._id}
                hover
                sx={{
                  "&:nth-of-type(even)": {
                    backgroundColor: "#f8fafc"
                  },
                  "&:hover": {
                    backgroundColor: "#e0ecff"
                  }
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => HandleDelete(row._id)}
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      px: 3
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