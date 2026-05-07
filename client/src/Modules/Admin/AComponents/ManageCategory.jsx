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

import {
  Button,
  Box,
  Typography,
  Stack,
} from '@mui/material';

import { Link } from 'react-router-dom';

import AddRoundedIcon from '@mui/icons-material/AddRounded';

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

        setCategories((prev) =>
          prev.filter((item) => item._id !== uid)
        );

        alert("Category Deleted");

      })

      .catch((error) => {

        console.log(error);
      });
  };

  return (

    <Box>

      {/* HEADER */}

      <Box

        sx={{

          mb: 2.5,

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: 2,
        }}
      >

        {/* TITLE */}

        <Box>

          <Typography

            sx={{

              color: "#ffffff",

              fontSize: "26px",

              fontWeight: 700,

              letterSpacing: "-0.03em",
            }}
          >
            Categories
          </Typography>

          <Typography

            sx={{

              color: "#94a3b8",

              fontSize: "13px",

              mt: 0.3
            }}
          >
            Manage content categories
          </Typography>

        </Box>

        {/* RIGHT SIDE */}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >

          {/* TOTAL */}

          <Box

            sx={{

              px: 1.8,

              py: 0.8,

              borderRadius: "10px",

              background: "rgba(59,130,246,0.10)",

              border: "1px solid rgba(59,130,246,0.16)",

              color: "#93c5fd",

              fontSize: "13px",

              fontWeight: 600,
            }}
          >
            Total : {categories.length}
          </Box>

          {/* ADD BUTTON */}

          <Button

            variant="contained"

            startIcon={<AddRoundedIcon sx={{ fontSize: 18 }} />}

            component={Link}

            to="/Admin/AddCategory"

            sx={{

              background: `
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #8b5cf6
                )
              `,

              textTransform: "none",

              borderRadius: "10px",

              px: 2,

              py: 0.8,

              minWidth: "auto",

              fontSize: "13px",

              fontWeight: 600,

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

        </Stack>

      </Box>

      {/* TABLE */}

      <TableContainer

        component={Paper}

        sx={{

          background: "rgba(15,23,42,0.78)",

          border: "1px solid rgba(255,255,255,0.06)",

          borderRadius: "18px",

          overflow: "hidden",

          boxShadow: "0 12px 30px rgba(0,0,0,0.22)",

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
                "Category Name",
                "Description",
                "Action"
              ].map((item) => (

                <TableCell

                  key={item}

                  align="center"

                  sx={{

                    color: "#94a3b8",

                    fontWeight: 700,

                    fontSize: "11.5px",

                    borderBottom:
                      "1px solid rgba(255,255,255,0.06)",

                    py: 1.8,
                  }}
                >
                  {item}
                </TableCell>

              ))}

            </TableRow>

          </TableHead>

          {/* BODY */}

          <TableBody>

            {categories.map((row, index) => (

              <TableRow

                key={row._id}

                sx={{

                  transition: "0.2s ease",

                  '&:hover': {

                    background:
                      "rgba(255,255,255,0.02)",
                  }
                }}
              >

                <TableCell align="center" sx={cellStyle}>
                  {index + 1}
                </TableCell>

                <TableCell

                  align="center"

                  sx={{

                    ...cellStyle,

                    color: "#ffffff",

                    fontWeight: 600
                  }}
                >
                  {row.category_name}
                </TableCell>

                <TableCell

                  align="center"

                  sx={{

                    ...cellStyle,

                    maxWidth: "520px",

                    lineHeight: 1.5,
                  }}
                >
                  {row.category_description}
                </TableCell>

                {/* ACTION */}

                <TableCell align="center" sx={cellStyle}>

                  <Box

                    sx={{

                      display: "flex",

                      justifyContent: "center",

                      gap: 1,
                    }}
                  >

                    {/* UPDATE */}

                    <Button

                      variant="outlined"

                      component={Link}

                      to={`/Admin/UpdateCategory/${row._id}`}

                      sx={{

                        minWidth: "38px",

                        width: "38px",

                        height: "38px",

                        borderRadius: "10px",

                        color: "#93c5fd",

                        borderColor: "rgba(147,197,253,0.22)",

                        background: "rgba(59,130,246,0.04)",

                        fontSize: "15px",

                        fontWeight: 700,

                        p: 0,

                        '&:hover': {

                          borderColor: "#60a5fa",

                          background:
                            "rgba(59,130,246,0.10)",
                        }
                      }}
                    >
                      ✐
                    </Button>

                    {/* DELETE */}

                    <Button

                      variant="contained"

                      onClick={() => HandleDelete(row._id)}

                      sx={{

                        minWidth: "38px",

                        width: "38px",

                        height: "38px",

                        borderRadius: "10px",

                        background:
                          "rgba(239,68,68,0.14)",

                        color: "#fca5a5",

                        border:
                          "1px solid rgba(239,68,68,0.18)",

                        fontSize: "15px",

                        p: 0,

                        boxShadow: "none",

                        '&:hover': {

                          background:
                            "rgba(239,68,68,0.22)",

                          boxShadow: "none",
                        }
                      }}
                    >
                      🗑
                    </Button>

                  </Box>

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

  py: 1.4,

  fontSize: "14px",
};