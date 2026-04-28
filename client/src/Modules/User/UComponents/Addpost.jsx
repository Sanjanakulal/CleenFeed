
// import React, { useEffect, useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import axios from 'axios'
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function Addpost() {
//     const [postdata, setPostdata] = useState({
//         title: '',
//         description: '',
//         categoryId: '',
//         postimage: ''
//     });

//     const [category, setCategory] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:5000/category/getcategory')
//             .then((res) => {
//                 setCategory(res.data.allcategory)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }, [])

//     const handlechange = (e) => {
//         if (e.target.name === 'postimage') {
//             setPostdata({ ...postdata, postimage: e.target.files[0] })
//         } else {
//             setPostdata({ ...postdata, [e.target.name]: e.target.value })
//         }
//     }

//     const token = localStorage.getItem("UserToken")

//     const handleregister = () => {
//         axios.post("http://localhost:5000/post/addpost", postdata, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 "auth-token": token
//             }
//         })
//             .then((res) => {
//                 alert(res.data.message)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     return (
//         <div
//             style={{
//                 minHeight: "100vh",
//                 background: `
//                 radial-gradient(circle at top left, rgba(236,72,153,0.18), transparent 22%),
//                 radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 22%),
//                 radial-gradient(circle at bottom left, rgba(168,85,247,0.14), transparent 20%),
//                 linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e1b4b 100%)
//                 `,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "20px",
//                 boxSizing: "border-box"
//             }}
//         >
//             <Paper
//                 elevation={0}
//                 style={{
//                     width: "440px",
//                     padding: "30px",
//                     borderRadius: "22px",
//                     background: "#e5e7eb",
//                     boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     transform: "translateY(-18px)"
//                 }}
//             >
//                 <Typography
//                     variant="h4"
//                     style={{
//                         fontFamily: "Poppins",
//                         textAlign: "center",
//                         marginBottom: "22px",
//                         color: "#111827",
//                         fontWeight: "600"
//                     }}
//                 >
//                     Create Post
//                 </Typography>

//                 <TextField
//                     variant="outlined"
//                     type="text"
//                     label="Title"
//                     name="title"
//                     fullWidth
//                     size="small"
//                     style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
//                     onChange={handlechange}
//                 />

//                 <TextField
//                     variant="outlined"
//                     type="file"
//                     label="Post Image"
//                     name="postimage"
//                     InputLabelProps={{ shrink: true }}
//                     fullWidth
//                     size="small"
//                     style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
//                     onChange={handlechange}
//                 />

//                 <TextField
//                     variant="outlined"
//                     multiline
//                     rows={4}
//                     label="Description"
//                     name="description"
//                     fullWidth
//                     size="small"
//                     style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
//                     onChange={handlechange}
//                 />

//                 <FormControl fullWidth style={{ marginBottom: "18px" }}>
//                     <Select
//                         name="categoryId"
//                         value={postdata.categoryId}
//                         onChange={handlechange}
//                         displayEmpty
//                         size="small"
//                         style={{
//                             background: "#ffffff",
//                             borderRadius: "10px"
//                         }}
//                     >
//                         <MenuItem disabled value="">
//                             Select category
//                         </MenuItem>

//                         {category.map((cat) => (
//                             <MenuItem key={cat._id} value={cat._id}>
//                                 {cat.category_name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>

//                 <Button
//                     variant="contained"
//                     fullWidth
//                     onClick={handleregister}
//                     style={{
//                         background: "linear-gradient(90deg,#2563eb,#7c3aed)",
//                         color: "#fff",
//                         padding: "12px",
//                         fontWeight: "600",
//                         borderRadius: "12px",
//                         textTransform: "none",
//                         boxShadow: "0 12px 22px rgba(37,99,235,0.28)"
//                     }}
//                 >
//                     Add Post
//                 </Button>

//             </Paper>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";

export default function Addpost() {
  const [category, setCategory] = useState([]);
  const [fileName, setFileName] = useState("");

  const [postdata, setPostdata] = useState({
    title: "",
    description: "",
    categoryId: "",
    postimage: ""
  });

  // Fetch Categories
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getcategory")
      .then((res) => {
        setCategory(res.data.allcategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handle Input
  const handlechange = (e) => {
    if (e.target.name === "postimage") {
      const file = e.target.files[0];

      setPostdata({
        ...postdata,
        postimage: file
      });

      setFileName(file.name);
    } else {
      setPostdata({
        ...postdata,
        [e.target.name]: e.target.value
      });
    }
  };

  // Add Post
  const handleregister = async () => {
    try {
      const token = localStorage.getItem("UserToken");

      await axios.post(
        "http://localhost:5000/post/addpost",
        postdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": token
          }
        }
      );

      alert("Post Added Successfully");

      setPostdata({
        title: "",
        description: "",
        categoryId: "",
        postimage: ""
      });

      setFileName("");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Post");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top right, rgba(124,58,237,0.18), transparent 28%),
          radial-gradient(circle at bottom left, rgba(59,130,246,0.12), transparent 25%),
          linear-gradient(135deg,#0f172a,#111827,#1e1b4b)
        `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "470px",
          p: 3,
          borderRadius: "22px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)"
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 700,
            textAlign: "center",
            mb: 2
          }}
        >
          Create Post
        </Typography>

        {/* Title */}
        <TextField
          fullWidth
          label="Post Title"
          name="title"
          value={postdata.title}
          onChange={handlechange}
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: "#cbd5e1" }
          }}
          InputProps={{
            sx: {
              color: "#fff",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)"
            }
          }}
        />

        {/* Upload Image */}
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{
            borderRadius: "14px",
            borderColor: "rgba(255,255,255,0.18)",
            color: "#fff",
            textTransform: "none",
            py: 1.1,
            mb: 1,
            "&:hover": {
              borderColor: "#7c3aed",
              background: "rgba(255,255,255,0.04)"
            }
          }}
        >
          Upload Image

          <input
            hidden
            type="file"
            name="postimage"
            onChange={handlechange}
          />
        </Button>

        <Typography
          sx={{
            color: "#cbd5e1",
            fontSize: "13px",
            mb: 2
          }}
        >
          {fileName || "No file selected"}
        </Typography>

        {/* Description */}
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          name="description"
          value={postdata.description}
          onChange={handlechange}
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: "#cbd5e1" }
          }}
          InputProps={{
            sx: {
              color: "#fff",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)"
            }
          }}
        />

        {/* Category */}
        <FormControl fullWidth sx={{ mb: 2.5 }}>
          <Select
            name="categoryId"
            value={postdata.categoryId}
            onChange={handlechange}
            displayEmpty
            sx={{
              color: "#fff",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)"
            }}
          >
            <MenuItem value="">Select Category</MenuItem>

            {category.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.category_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleregister}
          sx={{
            py: 1.1,
            borderRadius: "14px",
            fontWeight: 700,
            fontSize: "15px",
            textTransform: "none",
            background:
              "linear-gradient(90deg,#2563eb,#7c3aed)",
            boxShadow: "0 12px 24px rgba(124,58,237,0.30)",
            "&:hover": {
              background:
                "linear-gradient(90deg,#1d4ed8,#6d28d9)"
            }
          }}
        >
          Add Post
        </Button>
      </Paper>
    </Box>
  );
}