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
  Button,
  Box,
  Typography
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



  /* ORIGINAL FUNCTIONALITY KEPT */

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

        <Box>

          <Typography

            sx={{

              color: "#ffffff",

              fontSize: "26px",

              fontWeight: 700,

              letterSpacing: "-0.03em",
            }}
          >
            Reports
          </Typography>

          <Typography

            sx={{

              color: "#94a3b8",

              fontSize: "13px",

              mt: 0.3
            }}
          >
            Monitor flagged and reported posts
          </Typography>

        </Box>

        {/* TOTAL */}

        <Box

          sx={{

            px: 1.8,

            py: 0.8,

            borderRadius: "10px",

            background: "rgba(239,68,68,0.10)",

            border: "1px solid rgba(239,68,68,0.16)",

            color: "#fca5a5",

            fontSize: "13px",

            fontWeight: 600,
          }}
        >
          Total : {reports.length}
        </Box>

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
                "User",
                "Trust Score",
                "Title",
                "Description",
                "Reports",
                "Reasons",
                "Status",
                "Action"
              ].map((item) => (

                <TableCell

                  key={item}

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

            {reports.map((row, index) => (

              <TableRow

                key={row._id}

                sx={{

                  transition: "0.2s ease",

                  '&:hover': {

                    background:
                      "rgba(255,255,255,0.02)",
                  },

                  "& td": {

                    borderBottom:
                      "1px solid rgba(255,255,255,0.05)"
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
                  {row.userId?.name}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {row.userId?.trustScore}
                </TableCell>

                <TableCell

                  sx={{

                    ...cellStyle,

                    color: "#ffffff",

                    fontWeight: 500
                  }}
                >
                  {row.title}
                </TableCell>

                <TableCell

                  sx={{

                    ...cellStyle,

                    maxWidth: "260px",

                    lineHeight: 1.5,
                  }}
                >
                  {row.description}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {row.reportCount}
                </TableCell>

                <TableCell

                  sx={{

                    ...cellStyle,

                    maxWidth: "220px",

                    lineHeight: 1.5,
                  }}
                >
                  {row.reportReasons.length > 0
                    ? [...new Set(row.reportReasons)].join(", ")
                    : "No Reasons"}
                </TableCell>

                {/* STATUS */}

                <TableCell sx={cellStyle}>

                  <Box

                    sx={{

                      display: "inline-flex",

                      alignItems: "center",

                      px: 1.5,

                      py: 0.6,

                      borderRadius: "999px",

                      fontSize: "12.5px",

                      fontWeight: 700,

                      background: row.isFlagged
                        ? "rgba(245,158,11,0.12)"
                        : "rgba(239,68,68,0.12)",

                      color: row.isFlagged
                        ? "#fbbf24"
                        : "#f87171",

                      border: row.isFlagged
                        ? "1px solid rgba(245,158,11,0.18)"
                        : "1px solid rgba(239,68,68,0.18)"
                    }}
                  >
                    {row.isFlagged
                      ? "Flagged"
                      : "Reported"}
                  </Box>

                </TableCell>

                {/* DELETE */}

                <TableCell sx={cellStyle}>

                  <Button

                    variant="contained"

                    size="small"

                    onClick={() => handleDelete(row._id)}

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

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </Box>
  )
}

const cellStyle = {

  color: "#cbd5e1",

  py: 1.4,

  fontSize: "14px",
};