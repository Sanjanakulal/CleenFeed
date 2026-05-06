
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

        minHeight: "calc(100vh - 90px)",

        background: `
          radial-gradient(circle at top right, rgba(124,58,237,0.16), transparent 28%),
          radial-gradient(circle at bottom left, rgba(59,130,246,0.12), transparent 25%),
          linear-gradient(135deg,#0f172a,#111827,#1e1b4b)
        `,

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        px: 2,

        py: 4
      }}
    >

      <Paper

        elevation={0}

        sx={{

          width: "100%",

          maxWidth: "390px",

          p: 2.5,

          borderRadius: "18px",

          background: "rgba(255,255,255,0.06)",

          backdropFilter: "blur(18px)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: "0 20px 50px rgba(0,0,0,0.32)"
        }}
      >

        {/* Heading */}

        <Typography

          variant="h5"

          sx={{

            color: "#ffffff",

            fontWeight: 700,

            textAlign: "center",

            mb: 2.2
          }}
        >
          Create Post
        </Typography>

        {/* Title */}

        <TextField

          size="small"

          fullWidth

          label="Post Title"

          name="title"

          value={postdata.title}

          onChange={handlechange}

          sx={{ mb: 1.5 }}

          InputLabelProps={{
            style: { color: "#cbd5e1" }
          }}

          InputProps={{

            sx: {

              color: "#fff",

              borderRadius: "12px",

              background: "rgba(255,255,255,0.05)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* Upload Image */}

        <Button

          variant="outlined"

          component="label"

          fullWidth

          sx={{

            borderRadius: "12px",

            borderColor: "rgba(255,255,255,0.15)",

            color: "#fff",

            textTransform: "none",

            py: 0.9,

            fontWeight: 600,

            mb: 1,

            '&:hover': {

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

            color: "#94a3b8",

            fontSize: "12px",

            mb: 1.5
          }}
        >
          {fileName || "No file selected"}
        </Typography>

        {/* Description */}

        <TextField

          size="small"

          fullWidth

          multiline

          rows={3}

          label="Description"

          name="description"

          value={postdata.description}

          onChange={handlechange}

          sx={{ mb: 1.5 }}

          InputLabelProps={{
            style: { color: "#cbd5e1" }
          }}

          InputProps={{

            sx: {

              color: "#fff",

              borderRadius: "12px",

              background: "rgba(255,255,255,0.05)",

              '& fieldset': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover fieldset': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused fieldset': {
                borderColor: "#60a5fa"
              }
            }
          }}
        />

        {/* Category */}

        <FormControl fullWidth sx={{ mb: 2 }} size="small">

          <Select

            name="categoryId"

            value={postdata.categoryId}

            onChange={handlechange}

            displayEmpty

            sx={{

              color: "#fff",

              borderRadius: "12px",

              background: "rgba(255,255,255,0.05)",

              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: "rgba(255,255,255,0.08)"
              },

              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: "#3b82f6"
              },

              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: "#60a5fa"
              },

              '& .MuiSvgIcon-root': {
                color: "#cbd5e1"
              }
            }}
          >

            <MenuItem value="">Select Category</MenuItem>

            {category.map((cat) => (

              <MenuItem
                key={cat._id}
                value={cat._id}
              >
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

            py: 1,

            borderRadius: "12px",

            fontWeight: 700,

            fontSize: "14px",

            textTransform: "none",

            background:
              "linear-gradient(90deg,#2563eb,#7c3aed)",

            boxShadow: "0 10px 22px rgba(124,58,237,0.28)",

            '&:hover': {

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