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
//                 console.log(res.data.allcategory)
//                 setCategory(res.data.allcategory)
//             })
//             .catch((error) => {
//                 console.log(error)

//             })
//     }, [])
//     const handlechange = (e) => {
//         console.log({ ...postdata, [e.target.name]: e.target.value })

//         if (e.target.name === 'postimage') {
//             setPostdata({ ...postdata, postimage: e.target.files[0] })
//         } else {
//             setPostdata({ ...postdata, [e.target.name]: e.target.value })
//         }

//     }
//     const token = localStorage.getItem("UserToken")
//   console.log("usertoken details", token)

//     const handleregister = () => {
//         console.log("form details:", postdata)
//         axios.post("http://localhost:5000/post/addpost", postdata, { headers: { 'Content-Type': 'multipart/form-data' , "auth-token": token } })
//             .then((res) => {
//                 console.log("Post added successfully:", res.data)
//                 //  alert("registered successfully")
//                 alert(res.data.message)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     // return (
//     //     <div>
//     //         <Paper elevation={20} style={{ width: "550px", padding: "20px", margin: "50px auto" }}>
//     //             <Typography variant='h3' style={{ fontFamily: "poppins", textAlign: "center" }}>Add Post</Typography>
//     //             <TextField variant='outlined' type='text' label='Title' name='title' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//     //             <TextField variant='outlined' type='file' label='Post Image' name='postimage' InputLabelProps={{ shrink: true }} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//     //             <TextField variant='outlined' multiline rows={5} label='Description' name='description' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
//     //             <FormControl fullWidth>

//     //                 <Select
//     //                     name="categoryId"
//     //                     labelId="demo-simple-select-label"
//     //                     id="demo-simple-select"
//     //                     value={postdata.categoryId}
//     //                     label="Age"
//     //                     onChange={handlechange}
//     //                 >
//     //                     <MenuItem>Select category</MenuItem>
//     //                     {category.map((cat) => {
//     //                         return (
//     //                             <MenuItem value={cat._id}>{cat.category_name}</MenuItem>
//     //                         )
//     //                     })}

//     //                 </Select>
//     //             </FormControl>
//     //             <Button variant='contained' fullWidth onClick={handleregister} >Add Post</Button>
//     //         </Paper>

//     //     </div>
//     // )
//     return (
//   <div
//     style={{
//       minHeight: "100vh",
//       background: "#f4f6f9",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center"
//     }}
//   >
//     <Paper
//       elevation={4}
//       style={{
//         width: "420px",
//         padding: "22px",
//         borderRadius: "12px",
//         background: "#ffffff"
//       }}
//     >
//       <Typography
//         variant="h4"
//         style={{
//           fontFamily: "Poppins",
//           textAlign: "center",
//           marginBottom: "16px",
//           color: "#0d1622",
//           fontWeight: "500"   // 👈 softer, not bold
//         }}
//       >
//         Create Post
//       </Typography>

//       <TextField
//         variant="outlined"
//         type="text"
//         label="Title"
//         name="title"
//         fullWidth
//         size="small"
//         style={{ marginBottom: "12px" }}
//         onChange={handlechange}
//       />

//       <TextField
//         variant="outlined"
//         type="file"
//         label="Post Image"
//         name="postimage"
//         InputLabelProps={{ shrink: true }}
//         fullWidth
//         size="small"
//         style={{ marginBottom: "12px" }}
//         onChange={handlechange}
//       />

//       <TextField
//         variant="outlined"
//         multiline
//         rows={4}
//         label="Description"
//         name="description"
//         fullWidth
//         size="small"
//         style={{ marginBottom: "12px" }}
//         onChange={handlechange}
//       />

//       <FormControl fullWidth style={{ marginBottom: "16px" }}>
//         <Select
//           name="categoryId"
//           value={postdata.categoryId}
//           onChange={handlechange}
//           displayEmpty
//           size="small"
//         >
//           <MenuItem disabled value="">
//             Select category
//           </MenuItem>
//           {category.map((cat) => (
//             <MenuItem key={cat._id} value={cat._id}>
//               {cat.category_name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <Button
//         variant="contained"
//         fullWidth
//         onClick={handleregister}
//         style={{
//           backgroundColor: "#1e40af",   // 👈 dark blue
//           color: "#fff",
//           padding: "9px",
//           fontWeight: "500",
//           borderRadius: "6px",
//           textTransform: "none"
//         }}
//       >
//         Add Post
//       </Button>
//     </Paper>
//   </div>
// );
// }
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Addpost() {
    const [postdata, setPostdata] = useState({
        title: '',
        description: '',
        categoryId: '',
        postimage: ''
    });

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/category/getcategory')
            .then((res) => {
                setCategory(res.data.allcategory)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handlechange = (e) => {
        if (e.target.name === 'postimage') {
            setPostdata({ ...postdata, postimage: e.target.files[0] })
        } else {
            setPostdata({ ...postdata, [e.target.name]: e.target.value })
        }
    }

    const token = localStorage.getItem("UserToken")

    const handleregister = () => {
        axios.post("http://localhost:5000/post/addpost", postdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": token
            }
        })
            .then((res) => {
                alert(res.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: `
                radial-gradient(circle at top left, rgba(236,72,153,0.18), transparent 22%),
                radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 22%),
                radial-gradient(circle at bottom left, rgba(168,85,247,0.14), transparent 20%),
                linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e1b4b 100%)
                `,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                boxSizing: "border-box"
            }}
        >
            <Paper
                elevation={0}
                style={{
                    width: "440px",
                    padding: "30px",
                    borderRadius: "22px",
                    background: "#e5e7eb",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transform: "translateY(-18px)"
                }}
            >
                <Typography
                    variant="h4"
                    style={{
                        fontFamily: "Poppins",
                        textAlign: "center",
                        marginBottom: "22px",
                        color: "#111827",
                        fontWeight: "600"
                    }}
                >
                    Create Post
                </Typography>

                <TextField
                    variant="outlined"
                    type="text"
                    label="Title"
                    name="title"
                    fullWidth
                    size="small"
                    style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
                    onChange={handlechange}
                />

                <TextField
                    variant="outlined"
                    type="file"
                    label="Post Image"
                    name="postimage"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    size="small"
                    style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
                    onChange={handlechange}
                />

                <TextField
                    variant="outlined"
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    fullWidth
                    size="small"
                    style={{ marginBottom: "15px", background: "#ffffff", borderRadius: "10px" }}
                    onChange={handlechange}
                />

                <FormControl fullWidth style={{ marginBottom: "18px" }}>
                    <Select
                        name="categoryId"
                        value={postdata.categoryId}
                        onChange={handlechange}
                        displayEmpty
                        size="small"
                        style={{
                            background: "#ffffff",
                            borderRadius: "10px"
                        }}
                    >
                        <MenuItem disabled value="">
                            Select category
                        </MenuItem>

                        {category.map((cat) => (
                            <MenuItem key={cat._id} value={cat._id}>
                                {cat.category_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleregister}
                    style={{
                        background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                        color: "#fff",
                        padding: "12px",
                        fontWeight: "600",
                        borderRadius: "12px",
                        textTransform: "none",
                        boxShadow: "0 12px 22px rgba(37,99,235,0.28)"
                    }}
                >
                    Add Post
                </Button>

            </Paper>
        </div>
    );
}