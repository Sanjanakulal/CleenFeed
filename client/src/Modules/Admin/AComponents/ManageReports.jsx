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
//         setReports((prev) => prev.filter((item) => item._id !== id))
//       })
//   }

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         mt: 2,
//         width: "100%",
//         boxShadow: "none",
//         border: "1px solid #e5e7eb",
//         borderRadius: "8px"
//       }}
//     >
//       <Table>

//         <TableHead>
//           <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
//             <TableCell sx={{ fontWeight: 600 }}>SL.No</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Trust Score</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Reports</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Reasons</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {reports.map((row, index) => (
//             <TableRow
//               key={row._id}
//               hover
//               sx={{
//                 "&:nth-of-type(even)": {
//                   backgroundColor: "#fcfcfc"
//                 }
//               }}
//             >
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{row.userId?.name}</TableCell>
//               <TableCell>{row.userId?.trustScore}</TableCell>
//               <TableCell>{row.title}</TableCell>

//               <TableCell sx={{ maxWidth: "330px", color: "#555" }}>
//                 {row.description}
//               </TableCell>

//               <TableCell>{row.reportCount}</TableCell>

//               {/* <TableCell sx={{ color: "#555" }}>
//                 {row.reportReasons.length > 0
//                   ? row.reportReasons.join(", ")
//                   : "No Reasons"}
//               </TableCell> */}
//               <TableCell sx={{ color: "#555" }}>
//                 {row.reportReasons.length > 0
//                   ? [...new Set(row.reportReasons)].join(", ")
//                   : "No Reasons"}
//               </TableCell>

//               <TableCell>
//                 {row.isFlagged ? "Flagged" : "Reported"}
//               </TableCell>

//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   size="small"
//                   onClick={() => handleDelete(row._id)}
//                   sx={{
//                     textTransform: "none",
//                     boxShadow: "none"
//                   }}
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
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
  const token = localStorage.getItem("UserToken");

  axios.delete(`http://localhost:5000/post/deletepost/${id}`, {
    headers: {
      "auth-token": token   
    }
  })
  .then((res) => {
    alert(res.data.message);
    fetchReports();   
  })
  .catch((err) => {
    console.log(err);
  });
};
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #d1d5db",
        boxShadow: "0 4px 14px rgba(0,0,0,0.05)"
      }}
    >
      <Table>

        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#e5e7eb"
            }}
          >
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>SL.No</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>User</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Trust Score</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Reports</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Reasons</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#111827" }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {reports.map((row, index) => (
            <TableRow
              key={row._id}
              hover
              sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "#f3f4f6"
                },
                "&:hover": {
                  backgroundColor: "#e0f2fe"
                },
                "& td": {
                  borderBottom: "1px solid #d1d5db"
                }
              }}
            >
              <TableCell sx={{ color: "#111827" }}>
                {index + 1}
              </TableCell>

              <TableCell sx={{ fontWeight: 500, color: "#111827" }}>
                {row.userId?.name}
              </TableCell>

              <TableCell sx={{ color: "#111827" }}>
                {row.userId?.trustScore}
              </TableCell>

              <TableCell sx={{ fontWeight: 500, color: "#111827" }}>
                {row.title}
              </TableCell>

              <TableCell sx={{ maxWidth: "330px", color: "#374151" }}>
                {row.description}
              </TableCell>

              <TableCell sx={{ color: "#111827" }}>
                {row.reportCount}
              </TableCell>

              <TableCell sx={{ color: "#374151" }}>
                {row.reportReasons.length > 0
                  ? [...new Set(row.reportReasons)].join(", ")
                  : "No Reasons"}
              </TableCell>

              <TableCell>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    backgroundColor: row.isFlagged ? "#fef3c7" : "#fee2e2",
                    color: row.isFlagged ? "#92400e" : "#b91c1c"
                  }}
                >
                  {row.isFlagged ? "Flagged" : "Reported"}
                </span>
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(row._id)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 2,
                    boxShadow: "none",
                    fontWeight: 600
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