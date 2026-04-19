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
// import {Link} from 'react-router-dom';

// export default function ManageCategory() {
//   const [categories, setCategories] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:5000/category/getcategory')
//       .then((res) => {
//         console.log(res.data.allcategory)
//         setCategories(res.data.allcategory)

//       })
//       .catch((error) => {
//         console.log(error)
//       })

//   }, [])

//    const HandleDelete =(uid)=>{
//         axios.delete(`http://localhost:5000/category/deletecategory/${uid}`)
//         .then((res)=>{
//          console.log(res)
//          alert("category deleted")
//         })
//         .catch((error)=>{
//          console.log(error)
//         })  
//       }

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center">SL.No</TableCell>
//             <TableCell align="center">Category Name</TableCell>
//             <TableCell align="center">Category Description</TableCell>
//             <TableCell align="center">Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {categories.map((row, index) => (
//             <TableRow
//               key={row._id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row" align="center">
//                 {index + 1}
//               </TableCell>
//               <TableCell align="center">{row.category_name}</TableCell>
//               <TableCell align="center">{row.category_description}</TableCell>
//               <TableCell align="center">
//                 <Button variant='contained' sx={{ mr: 1 }} component={Link} to={`/Admin/UpdateCategory/${row._id}`}>Update</Button>
//                 <Button variant='contained' color="error" onClick={() => HandleDelete(row._id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

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
import { Button } from '@mui/material';
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
          marginRight:"70px",
        }}
      >
    
        <Button
        sx={{ borderRadius: "10px", textTransform: "none" }}
          variant="contained"
          color="success"
          component={Link}
          to="/Admin/AddCategory"
        >
          + Add Category
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">SL.No</TableCell>
              <TableCell align="center">Category Name</TableCell>
              <TableCell align="center">Category Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{row.category_name}</TableCell>
                <TableCell align="center">{row.category_description}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    component={Link}
                    to={`/Admin/UpdateCategory/${row._id}`}
                  >
                    Update
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => HandleDelete(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}