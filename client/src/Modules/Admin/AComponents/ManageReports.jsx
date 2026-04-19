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
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>SL.No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Reports</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {reports.map((row,index)=>(
            <TableRow key={row._id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.reportCount}</TableCell>
              <TableCell>
                {row.isFlagged ? "Flagged" : "Reported"}
              </TableCell>

              <TableCell>
                <Button
                  color="error"
                  variant="contained"
                  onClick={()=>handleDelete(row._id)}
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