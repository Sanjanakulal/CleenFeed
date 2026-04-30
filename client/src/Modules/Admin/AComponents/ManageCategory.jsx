// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import Rating from '@mui/material/Rating';
// // import { useState } from 'react';
// // import { useEffect } from 'react';
// // import axios from 'axios';
// // import { Button } from '@mui/material';
// // import {Link} from 'react-router-dom';

// // export default function ManageCategory() {
// //   const [categories, setCategories] = useState([])

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/category/getcategory')
// //       .then((res) => {
// //         console.log(res.data.allcategory)
// //         setCategories(res.data.allcategory)

// //       })
// //       .catch((error) => {
// //         console.log(error)
// //       })

// //   }, [])

// //    const HandleDelete =(uid)=>{
// //         axios.delete(`http://localhost:5000/category/deletecategory/${uid}`)
// //         .then((res)=>{
// //          console.log(res)
// //          alert("category deleted")
// //         })
// //         .catch((error)=>{
// //          console.log(error)
// //         })  
// //       }

// //   return (
// //     <TableContainer component={Paper}>
// //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //         <TableHead>
// //           <TableRow>
// //             <TableCell align="center">SL.No</TableCell>
// //             <TableCell align="center">Category Name</TableCell>
// //             <TableCell align="center">Category Description</TableCell>
// //             <TableCell align="center">Action</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {categories.map((row, index) => (
// //             <TableRow
// //               key={row._id}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row" align="center">
// //                 {index + 1}
// //               </TableCell>
// //               <TableCell align="center">{row.category_name}</TableCell>
// //               <TableCell align="center">{row.category_description}</TableCell>
// //               <TableCell align="center">
// //                 <Button variant='contained' sx={{ mr: 1 }} component={Link} to={`/Admin/UpdateCategory/${row._id}`}>Update</Button>
// //                 <Button variant='contained' color="error" onClick={() => HandleDelete(row._id)}>Delete</Button>
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>

// //   );
// // }
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function ManageCategory() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/category/getcategory')
//       .then((res) => {
//         setCategories(res.data.allcategory);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const HandleDelete = (uid) => {
//     axios.delete(`http://localhost:5000/category/deletecategory/${uid}`)
//       .then(() => {
//         alert("Category Deleted");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           marginBottom: "20px",
//           marginRight:"70px",
//         }}
//       >
    
//         <Button
//         sx={{ borderRadius: "10px", textTransform: "none" }}
//           variant="contained"
//           color="success"
//           component={Link}
//           to="/Admin/AddCategory"
//         >
//           + Add Category
//         </Button>
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell align="center">SL.No</TableCell>
//               <TableCell align="center">Category Name</TableCell>
//               <TableCell align="center">Category Description</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {categories.map((row, index) => (
//               <TableRow key={row._id}>
//                 <TableCell align="center">{index + 1}</TableCell>
//                 <TableCell align="center">{row.category_name}</TableCell>
//                 <TableCell align="center">{row.category_description}</TableCell>

//                 <TableCell align="center">
//                   <Button
//                     variant="contained"
//                     sx={{ mr: 1 }}
//                     component={Link}
//                     to={`/Admin/UpdateCategory/${row._id}`}
//                   >
//                     Update
//                   </Button>

//                   <Button
//                     variant="contained"
//                     color="error"
//                     onClick={() => HandleDelete(row._id)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>

//         </Table>
//       </TableContainer>
//     </>
//   );
// }

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ManageCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/category/getcategory')
      .then((res) => {
        setCategories(res.data.allcategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const HandleDelete = (uid) => {
    axios.delete(`http://localhost:5000/category/deletecategory/${uid}`)
      .then(() => {
        alert("Category Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ padding: "25px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      {/* Top Button Only */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "18px"
        }}
      >
        <Button
          variant="contained"
          component={Link}
          to="/Admin/AddCategory"
          sx={{
            backgroundColor: "#2e7d32",
            textTransform: "none",
            borderRadius: "8px",
            px: 2.5
          }}
        >
          Add Category
        </Button>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f1f5f9" }}>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>SL.No</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Category Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Category Description</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:nth-of-type(even)": { backgroundColor: "#fafafa" },
                  "&:hover": { backgroundColor: "#f5f5f5" }
                }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{row.category_name}</TableCell>
                <TableCell align="center">{row.category_description}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="outlined"
                    component={Link}
                    to={`/Admin/UpdateCategory/${row._id}`}
                    sx={{
                      mr: 1,
                      textTransform: "none",
                      borderRadius: "6px"
                    }}
                  >
                    Update
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => HandleDelete(row._id)}
                    sx={{
                      textTransform: "none",
                      borderRadius: "6px"
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