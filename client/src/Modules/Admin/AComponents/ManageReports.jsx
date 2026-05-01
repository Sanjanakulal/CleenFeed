// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, Button
// } from '@mui/material'

// export default function ManageReports() {

//   const [reports, setReports] = useState([])

//   useEffect(() => {
//     axios.get("http://localhost:5000/post/getreports")
//       .then((res) => {
//         setReports(res.data.reportposts)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/post/deletepost/${id}`)
//       .then((res) => {
//         alert(res.data.message)
//       })
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table>

//         <TableHead>
//           <TableRow>
//             <TableCell>SL.No</TableCell>
//             <TableCell>User</TableCell>
//             <TableCell>Trust Score</TableCell>
//             <TableCell>Title</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Reports</TableCell>
//             <TableCell>Reasons</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {reports.map((row, index) => (
//             <TableRow key={row._id}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{row.userId?.name}</TableCell>
//               <TableCell>{row.userId?.trustScore}</TableCell>
//               <TableCell>{row.title}</TableCell>
//               <TableCell>{row.description}</TableCell>
//               <TableCell>{row.reportCount}</TableCell>
//               <TableCell>
//                 {row.reportReasons.length > 0
//                   ? row.reportReasons.join(", ")
//                   : "No Reasons"}
//               </TableCell>
//               <TableCell>
//                 {row.isFlagged ? "Flagged" : "Reported"}
//               </TableCell>

//               <TableCell>
//                 <Button
//                   color="error"
//                   variant="contained"
//                   onClick={() => handleDelete(row._id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>

//       </Table>
//     </TableContainer>
//   )
// }

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material'

export default function ManageReports() {

  const [reports, setReports] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/post/getreports")
      .then((res) => {
        setReports(res.data.reportposts)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/post/deletepost/${id}`)
      .then((res) => {
        alert(res.data.message)
        setReports((prev) => prev.filter((item) => item._id !== id))
      })
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        width: "100%",
        boxShadow: "none",
        border: "1px solid #e5e7eb",
        borderRadius: "8px"
      }}
    >
      <Table>

        <TableHead>
          <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
            <TableCell sx={{ fontWeight: 600 }}>SL.No</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Trust Score</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Reports</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Reasons</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {reports.map((row, index) => (
            <TableRow
              key={row._id}
              hover
              sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "#fcfcfc"
                }
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.userId?.name}</TableCell>
              <TableCell>{row.userId?.trustScore}</TableCell>
              <TableCell>{row.title}</TableCell>

              <TableCell sx={{ maxWidth: "330px", color: "#555" }}>
                {row.description}
              </TableCell>

              <TableCell>{row.reportCount}</TableCell>

              <TableCell sx={{ color: "#555" }}>
                {row.reportReasons.length > 0
                  ? row.reportReasons.join(", ")
                  : "No Reasons"}
              </TableCell>

              <TableCell>
                {row.isFlagged ? "Flagged" : "Reported"}
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(row._id)}
                  sx={{
                    textTransform: "none",
                    boxShadow: "none"
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
  )
}