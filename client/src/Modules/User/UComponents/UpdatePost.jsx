
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
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [fileName, setFileName] = useState("");

  const [postdata, setPostdata] = useState({
    title: "",
    description: "",
    categoryId: "",
    postimage: ""
  });

  // Fetch old post
  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/getpostbyid/${id}`)
      .then((res) => {
        setPostdata(res.data.byid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Fetch categories
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

  // Input Change
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

  // Update Post
  const handleupdate = async () => {
    try {
      const formData = new FormData();

      formData.append("title", postdata.title);
      formData.append("description", postdata.description);
      formData.append("categoryId", postdata.categoryId);

      if (postdata.postimage instanceof File) {
        formData.append("postimage", postdata.postimage);
      }

      const token = localStorage.getItem("UserToken");

      await axios.put(
        `http://localhost:5000/post/updatepost/${id}`,
        formData,
        {
          headers: {
            "auth-token": token
          }
        }
      );

      alert("Post Updated Successfully");
      navigate("/MyPosts");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
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
          maxWidth: "520px",
          p: 4,
          borderRadius: "24px",
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
            mb: 3
          }}
        >
          Update Post
        </Typography>

        {/* Old Image Preview */}
        {postdata.postimage &&
          !(postdata.postimage instanceof File) && (
            <Box
              component="img"
              src={`http://localhost:5000/image/${postdata.postimage}`}
              sx={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "14px",
                mb: 2
              }}
            />
          )}

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
            py: 1.2,
            mb: 1,
            "&:hover": {
              borderColor: "#7c3aed",
              background: "rgba(255,255,255,0.04)"
            }
          }}
        >
          Upload New Image

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
  rows={4}
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
      background: "rgba(255,255,255,0.06)",
      alignItems: "flex-start",

      "& textarea": {
        resize: "none",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",

        "&::-webkit-scrollbar": {
          display: "none"
        }
      }
    }
  }}
/>

        {/* Category */}
        <FormControl fullWidth sx={{ mb: 3 }}>
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

        {/* Submit */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleupdate}
          sx={{
            py: 1.4,
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
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
}