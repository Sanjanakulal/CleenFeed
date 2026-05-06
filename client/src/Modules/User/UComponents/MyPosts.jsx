// import React, { useEffect, useState } from 'react'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
// import Menu from '@mui/material/Menu'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   FormControl,
//   Select,
//   MenuItem,
//   Box,
//   CardActions,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button
// } from '@mui/material'

// import FavoriteIcon from '@mui/icons-material/Favorite'
// import FlagIcon from '@mui/icons-material/Flag'

// export default function MyPosts() {

//   const navigate = useNavigate()

//   const [posts, setPosts] = useState([])
//   const [categories, setCategories] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const [anchorEl, setAnchorEl] = useState(null)
//   const [selectedId, setSelectedId] = useState(null)

//   // 🚩 report state
//   const [openReport, setOpenReport] = useState(false)
//   const [selectedPostId, setSelectedPostId] = useState(null)
//   const [reason, setReason] = useState("")

//   const reportReasons = ["Spam", "Inappropriate", "Misinformation", "Fraud", "Offensive Language"]

//   // ❤️ like state (with localStorage)
//   const [likedPosts, setLikedPosts] = useState(() => {
//     const saved = localStorage.getItem("likedPosts")
//     return saved ? JSON.parse(saved) : []
//   })

//   useEffect(() => {
//     localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
//   }, [likedPosts])

//   // fetch posts
//   useEffect(() => {
//     const token = localStorage.getItem("UserToken")

//     axios.get("http://localhost:5000/post/getmypost", {
//       headers: { "auth-token": token }
//     })
//       .then(res => setPosts(res.data.myposts))
//   }, [])

//   // fetch categories
//   useEffect(() => {
//     axios.get("http://localhost:5000/category/getcategory")
//       .then(res => setCategories(res.data.allcategory))
//   }, [])

//   // filter posts
//   const filteredPosts =
//     selectedCategory === "All"
//       ? posts
//       : posts.filter(p => p.categoryId?._id === selectedCategory)

//   // ❤️ like
//   const handleLike = (id) => {
//     if (likedPosts.includes(id)) {
//       setLikedPosts(likedPosts.filter(pid => pid !== id))
//     } else {
//       setLikedPosts([...likedPosts, id])
//     }
//   }

//   // 🚩 open dialog
//   const handleOpenReport = (id) => {
//     setSelectedPostId(id)
//     setOpenReport(true)
//   }

//   // 🚩 submit report
//   const handleSubmitReport = () => {
//     if (!reason) {
//       alert("Please select a reason")
//       return
//     }

//     axios.put(`http://localhost:5000/post/report/${selectedPostId}`, {
//       reason
//     })
//       .then(() => {
//         alert("Post reported")
//         setOpenReport(false)
//         setReason("")
//       })
//   }

//   const handleMenuOpen = (event, id) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedId(id)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//   }

//   const handleDelete = async (id) => {

//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this post?"
//     )

//     if (!confirmDelete) return

//     const token = localStorage.getItem("UserToken")

//     await axios.delete(
//       `http://localhost:5000/post/deletepost/${id}`,
//       {
//         headers: { "auth-token": token }
//       }
//     )

//     setPosts(posts.filter(post => post._id !== id))
//     handleMenuClose()
//   }

//   return (
//     <Box sx={{ padding: "20px", background: "#f4f6f9", minHeight: "100vh" }}>

//       {/* FILTER */}
//       <Box sx={{ maxWidth: "250px", marginBottom: "20px" }}>
//         <FormControl fullWidth size="small">
//           <Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <MenuItem value="All">All Categories</MenuItem>
//             {categories.map(cat => (
//               <MenuItem key={cat._id} value={cat._id}>
//                 {cat.category_name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* EMPTY STATE OR POSTS */}
//       {filteredPosts.length === 0 ? (

//         <Box
//           sx={{
//             textAlign: "center",
//             marginTop: "80px",
//             width: "100%"
//           }}
//         >

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             No posts created yet 😕
//           </Typography>

//           <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
//             Start sharing your ideas by creating your first post
//           </Typography>

//           <Button
//             variant="contained"
//             onClick={() => window.location.href = "/addpost"}
//             sx={{
//               backgroundColor: "#1e40af",
//               textTransform: "none"
//             }}
//           >
//             Create Post
//           </Button>

//         </Box>

//       ) : (

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               sm: "repeat(2, 1fr)",
//               md: "repeat(3, 1fr)",
//               lg: "repeat(4, 1fr)"
//             },
//             gap: "16px"
//           }}
//         >

//           {filteredPosts.map(post => (

//             <Card
//               key={post._id}
//               sx={{
//                 borderRadius: "12px",
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "100%",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                 "&:hover": {
//                   transform: "translateY(-4px)"
//                 }
//               }}
//             >

//               {/* IMAGE */}
//               {post.postimage && (
//                 <CardMedia
//                   component="img"
//                   image={`http://localhost:5000/image/${post.postimage}`}
//                   sx={{ height: "160px", objectFit: "cover" }}
//                 />
//               )}

//               {/* CONTENT */}
//               <CardContent sx={{ flexGrow: 1 }}>

//                 <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//                   {post.title}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: "12px",
//                     display: "-webkit-box",
//                     WebkitLineClamp: 3,
//                     WebkitBoxOrient: "vertical",
//                     overflow: "hidden"
//                   }}
//                 >
//                   {post.description}
//                 </Typography>

//                 <Typography sx={{ fontSize: "11px", color: "#1e40af", mt: 1 }}>
//                   #{post.categoryId?.category_name}
//                 </Typography>

//               </CardContent>

//               {/* ACTIONS */}
//               <CardActions sx={{ justifyContent: "space-between" }}>

//                 <IconButton onClick={() => handleLike(post._id)}>
//                   <FavoriteIcon
//                     color={likedPosts.includes(post._id) ? "error" : "disabled"}
//                   />
//                 </IconButton>

//                 <IconButton onClick={(e) => handleMenuOpen(e, post._id)}>
//                   <MoreVertIcon />
//                 </IconButton>

//               </CardActions>

//             </Card>

//           ))}

//         </Box>

//       )}

//       {/* REPORT DIALOG */}
//       <Dialog open={openReport} onClose={() => setOpenReport(false)}>

//         <DialogTitle>Why are you reporting this post?</DialogTitle>

//         <DialogContent>

//           <select
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             style={{ width: "100%", padding: "10px", marginTop: "10px" }}
//           >
//             <option value="">Select reason</option>
//             {reportReasons.map((r, i) => (
//               <option key={i} value={r}>{r}</option>
//             ))}
//           </select>

//         </DialogContent>

//         <DialogActions>
//           <Button onClick={() => setOpenReport(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleSubmitReport}>
//             Submit
//           </Button>
//         </DialogActions>

//       </Dialog>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >

//         <MenuItem
//           onClick={() => navigate(`/updatepost/${selectedId}`)}
//         >
//           Update
//         </MenuItem>

//         <MenuItem
//           onClick={() => handleDelete(selectedId)}
//           sx={{ color: "red" }}
//         >
//           Delete
//         </MenuItem>

//       </Menu>

//     </Box>
//   )
// }

import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import { useNavigate } from 'react-router-dom'
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

export default function MyPosts() {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  // 🚩 report state
  const [openReport, setOpenReport] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [reason, setReason] = useState("")

  const reportReasons = [
    "Spam",
    "Inappropriate",
    "Misinformation",
    "Fraud",
    "Offensive Language"
  ]

  // ❤️ like state
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

    axios.get("http://localhost:5000/post/getmypost", {

      headers: { "auth-token": token }

    })
      .then(res => setPosts(res.data.myposts))

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

  const handleMenuOpen = (event, id) => {

    setAnchorEl(event.currentTarget)
    setSelectedId(id)

  }

  const handleMenuClose = () => {

    setAnchorEl(null)

  }

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    )

    if (!confirmDelete) return

    const token = localStorage.getItem("UserToken")

    await axios.delete(
      `http://localhost:5000/post/deletepost/${id}`,
      {
        headers: { "auth-token": token }
      }
    )

    setPosts(posts.filter(post => post._id !== id))

    handleMenuClose()
  }

  return (

    <Box

      sx={{

        px: { xs: 2, md: 3 },

        py: 3,

        minHeight: "100vh",

        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 25%),
          radial-gradient(circle at top right, rgba(139,92,246,0.14), transparent 25%),
          radial-gradient(circle at bottom left, rgba(34,211,238,0.10), transparent 20%),
          linear-gradient(180deg, #0f172a 0%, #020617 100%)
        `,
      }}
    >

      {/* FILTER */}

      <Box

        sx={{

          maxWidth: "260px",

          mb: 4,

          background: "rgba(255,255,255,0.05)",

          backdropFilter: "blur(16px)",

          border: "1px solid rgba(255,255,255,0.06)",

          borderRadius: "18px",

          p: 0.6,

          boxShadow: `
            0 10px 30px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.04)
          `,
        }}
      >

        <FormControl fullWidth size="small">

          <Select

            value={selectedCategory}

            onChange={(e) => setSelectedCategory(e.target.value)}

            sx={{

              color: "#f8fafc",

              borderRadius: "14px",

              '.MuiOutlinedInput-notchedOutline': {
                border: "none"
              },

              '& .MuiSvgIcon-root': {
                color: "#cbd5e1"
              },
            }}
          >

            <MenuItem value="All">All Categories</MenuItem>

            {categories.map(cat => (

              <MenuItem
                key={cat._id}
                value={cat._id}
              >
                {cat.category_name}
              </MenuItem>

            ))}

          </Select>

        </FormControl>

      </Box>

      {/* POSTS */}

      {filteredPosts.length === 0 ? (

        <Box

          sx={{
            textAlign: "center",
            mt: 10
          }}
        >

          <Typography

            variant="h5"

            sx={{
              color: "#fff",
              fontWeight: 700
            }}
          >
            No posts created yet 😕
          </Typography>

          <Typography

            sx={{
              mt: 1,
              color: "#94a3b8"
            }}
          >
            Start sharing your ideas by creating your first post
          </Typography>

          <Button

            variant="contained"

            onClick={() => window.location.href = "/addpost"}

            sx={{

              mt: 3,

              px: 4,
              py: 1.2,

              borderRadius: "999px",

              textTransform: "none",

              fontWeight: 700,

              background: `
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #8b5cf6
                )
              `,
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

            gap: "22px"
          }}
        >

          {filteredPosts.map(post => (

            <Card

              key={post._id}

              sx={{

                borderRadius: "24px",

                display: "flex",
                flexDirection: "column",

                overflow: "hidden",

                background: `
                  linear-gradient(
                    180deg,
                    rgba(15,23,42,0.88),
                    rgba(17,24,39,0.92)
                  )
                `,

                backdropFilter: "blur(16px)",

                border: "1px solid rgba(255,255,255,0.06)",

                boxShadow: `
                  0 12px 35px rgba(0,0,0,0.28),
                  inset 0 1px 0 rgba(255,255,255,0.04)
                `,

                transition: "all 0.28s ease",

                '&:hover': {

                  transform: "translateY(-8px)",

                  border: "1px solid rgba(96,165,250,0.25)",

                  boxShadow: `
                    0 20px 40px rgba(59,130,246,0.18)
                  `,
                }
              }}
            >

              {/* IMAGE */}

              {post.postimage && (

                <CardMedia

                  component="img"

                  image={`http://localhost:5000/image/${post.postimage}`}

                  sx={{

                    height: "190px",

                    objectFit: "cover",
                  }}
                />
              )}

              {/* CONTENT */}

              <CardContent

                sx={{
                  flexGrow: 1,
                  p: 2.2
                }}
              >

                <Typography

                  variant="subtitle1"

                  sx={{
                    fontWeight: 700,
                    color: "#f8fafc",
                    mb: 1
                  }}
                >
                  {post.title}
                </Typography>

                <Typography

                  variant="body2"

                  sx={{

                    fontSize: "13px",

                    color: "#cbd5e1",

                    lineHeight: 1.8,

                    display: "-webkit-box",

                    WebkitLineClamp: 3,

                    WebkitBoxOrient: "vertical",

                    overflow: "hidden"
                  }}
                >
                  {post.description}
                </Typography>

                <Typography

                  sx={{

                    fontSize: "12px",

                    color: "#60a5fa",

                    mt: 2,

                    fontWeight: 600
                  }}
                >
                  #{post.categoryId?.category_name}
                </Typography>

              </CardContent>

              {/* ACTIONS */}

              <CardActions

                sx={{

                  justifyContent: "space-between",

                  alignItems: "center",

                  px: 2,
                  pb: 2,
                  pt: 1.2,

                  mt: "auto",

                  borderTop: "1px solid rgba(255,255,255,0.05)",

                  background: `
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.01),
                      rgba(255,255,255,0.03)
                    )
                  `,
                }}
              >

                {/* LIKE */}

                <IconButton

                  onClick={() => handleLike(post._id)}

                  sx={{

                    display: "flex",

                    alignItems: "center",

                    gap: 0.7,

                    px: 1.3,
                    py: 0.8,

                    borderRadius: "14px",

                    background: "rgba(255,255,255,0.04)",

                    border: "1px solid rgba(255,255,255,0.05)",

                    transition: "all 0.22s ease",

                    '&:hover': {

                      background: "rgba(255,255,255,0.08)",

                      transform: "translateY(-2px)",
                    }
                  }}
                >

                  <FavoriteIcon

                    sx={{

                      fontSize: 22,

                      color:
                        likedPosts.includes(post._id)
                          ? "#ef4444"
                          : "#94a3b8",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#cbd5e1"
                    }}
                  >
                    {post.likesCount || 0}
                  </Typography>

                </IconButton>

                {/* MENU */}

                <IconButton

                  onClick={(e) => handleMenuOpen(e, post._id)}

                  sx={{

                    px: 1,
                    py: 0.8,

                    borderRadius: "14px",

                    background: "rgba(255,255,255,0.04)",

                    border: "1px solid rgba(255,255,255,0.05)",

                    transition: "all 0.22s ease",

                    '&:hover': {

                      background: "rgba(255,255,255,0.08)",

                      transform: "translateY(-2px)",
                    }
                  }}
                >

                  <MoreVertIcon
                    sx={{
                      color: "#cbd5e1"
                    }}
                  />

                </IconButton>

              </CardActions>

            </Card>

          ))}

        </Box>

      )}

      {/* REPORT DIALOG */}

      <Dialog

        open={openReport}

        onClose={() => setOpenReport(false)}

        PaperProps={{

          sx: {

            borderRadius: "22px",

            background: "#0f172a",

            color: "#fff",

            border: "1px solid rgba(255,255,255,0.08)",

            minWidth: "340px"
          }
        }}
      >

        <DialogTitle sx={{ fontWeight: 700 }}>
          Why are you reporting this post?
        </DialogTitle>

        <DialogContent>

          <select

            value={reason}

            onChange={(e) => setReason(e.target.value)}

            style={{

              width: "100%",

              padding: "12px",

              marginTop: "10px",

              borderRadius: "12px",

              background: "#111827",

              color: "#fff",

              border: "1px solid rgba(255,255,255,0.08)",

              outline: "none"
            }}
          >

            <option value="">Select reason</option>

            {reportReasons.map((r, i) => (

              <option key={i} value={r}>
                {r}
              </option>

            ))}

          </select>

        </DialogContent>

        <DialogActions sx={{ p: 2 }}>

          <Button

            onClick={() => setOpenReport(false)}

            sx={{
              color: "#cbd5e1",
              textTransform: "none"
            }}
          >
            Cancel
          </Button>

          <Button

            variant="contained"

            onClick={handleSubmitReport}

            sx={{

              textTransform: "none",

              borderRadius: "10px",

              background: `
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #8b5cf6
                )
              `,
            }}
          >
            Submit
          </Button>

        </DialogActions>

      </Dialog>

      {/* MENU */}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}

        PaperProps={{

          sx: {

            background: "#111827",

            color: "#fff",

            borderRadius: "16px",

            border: "1px solid rgba(255,255,255,0.08)",

            mt: 1,

            boxShadow: "0 15px 35px rgba(0,0,0,0.35)"
          }
        }}
      >

        <MenuItem
          onClick={() => navigate(`/updatepost/${selectedId}`)}
        >
          Update
        </MenuItem>

        <MenuItem
          onClick={() => handleDelete(selectedId)}
          sx={{ color: "#f87171" }}
        >
          Delete
        </MenuItem>

      </Menu>

    </Box>
  )
}