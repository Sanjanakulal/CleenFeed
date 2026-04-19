import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Box,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FlagIcon from '@mui/icons-material/Flag'

export default function HomeFeed() {

  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  // 🚩 report state
  const [openReport, setOpenReport] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [reason, setReason] = useState("")

  const reportReasons = ["Spam", "Inappropriate", "Misinformation","Fraud","Offensive Language"]

  // ❤️ like state (with localStorage)
  const [likedPosts, setLikedPosts] = useState(() => {
    const saved = localStorage.getItem("likedPosts")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
  }, [likedPosts])

  // fetch posts
  useEffect(() => {
    const token = localStorage.getItem("UserToken")

    axios.get("http://localhost:5000/post/getpost", {
      headers: { "auth-token": token }
    })
      .then(res => setPosts(res.data.allposts))
  }, [])

  // fetch categories
  useEffect(() => {
    axios.get("http://localhost:5000/category/getcategory")
      .then(res => setCategories(res.data.allcategory))
  }, [])

  // filter posts
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter(p => p.categoryId?._id === selectedCategory)

  // ❤️ like
  const handleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(pid => pid !== id))
    } else {
      setLikedPosts([...likedPosts, id])
    }
  }

  // 🚩 open dialog
  const handleOpenReport = (id) => {
    setSelectedPostId(id)
    setOpenReport(true)
  }

  // 🚩 submit report
  const handleSubmitReport = () => {
    if (!reason) {
      alert("Please select a reason")
      return
    }

    axios.put(`http://localhost:5000/post/report/${selectedPostId}`, {
      reason
    })
      .then(() => {
        alert("Post reported")
        setOpenReport(false)
        setReason("")
      })
  }

  return (
    <Box sx={{ padding: "20px", background: "#f4f6f9", minHeight: "100vh" }}>

      {/* FILTER */}
      <Box sx={{ maxWidth: "250px", marginBottom: "20px" }}>
        <FormControl fullWidth size="small">
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="All">All Categories</MenuItem>
            {categories.map(cat => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.category_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* EMPTY STATE OR POSTS */}
      {filteredPosts.length === 0 ? (

        <Box
          sx={{
            textAlign: "center",
            marginTop: "80px",
            width: "100%"
          }}
        >

          <Typography variant="h6" sx={{ mb: 2 }}>
            No posts created yet 😕
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Start sharing your ideas by creating your first post
          </Typography>

          <Button
            variant="contained"
            onClick={() => window.location.href = "/addpost"}
            sx={{
              backgroundColor: "#1e40af",
              textTransform: "none"
            }}
          >
            Create Post
          </Button>

        </Box>

      ) : (

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)"
            },
            gap: "16px"
          }}
        >

          {filteredPosts.map(post => (

            <Card
              key={post._id}
              sx={{
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-4px)"
                }
              }}
            >

              {/* IMAGE */}
              {post.postimage && (
                <CardMedia
                  component="img"
                  image={`http://localhost:5000/image/${post.postimage}`}
                  sx={{ height: "160px", objectFit: "cover" }}
                />
              )}

              {/* CONTENT */}
              <CardContent sx={{ flexGrow: 1 }}>

                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {post.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {post.description}
                </Typography>

                <Typography sx={{ fontSize: "11px", color: "#1e40af", mt: 1 }}>
                  #{post.categoryId?.category_name}
                </Typography>

              </CardContent>

              {/* ACTIONS */}
              <CardActions sx={{ justifyContent: "space-between" }}>

                <IconButton onClick={() => handleLike(post._id)}>
                  <FavoriteIcon
                    color={likedPosts.includes(post._id) ? "error" : "disabled"}
                  />
                </IconButton>

                <IconButton onClick={() => handleOpenReport(post._id)}>
                  <FlagIcon color="warning" />
                </IconButton>

              </CardActions>

            </Card>

          ))}

        </Box>

      )}

      {/* REPORT DIALOG */}
      <Dialog open={openReport} onClose={() => setOpenReport(false)}>

        <DialogTitle>Why are you reporting this post?</DialogTitle>

        <DialogContent>

          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          >
            <option value="">Select reason</option>
            {reportReasons.map((r, i) => (
              <option key={i} value={r}>{r}</option>
            ))}
          </select>

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenReport(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmitReport}>
            Submit
          </Button>
        </DialogActions>

      </Dialog>

    </Box>
  )
}