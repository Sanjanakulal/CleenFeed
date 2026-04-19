const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addpost,getpost,getpostbyid,deletepost,updatepost, getMyPosts, reportPost, getReports} = require('../Controller/Post_controller');

const route = express.Router();

const auth = require("../Middlewear/Auth")
const upload = require('../Middlewear/imageupload')

route.post('/addpost',auth,upload.single('postimage'),addpost)
route.get('/getpost',getpost)  
route.get('/getpostbyid/:id',getpostbyid)
route.delete('/deletepost/:id',deletepost)
route.put('/updatepost/:id', upload.single('postimage'), updatepost)
route.get('/getmypost', auth, getMyPosts)
route.put('/report/:id', reportPost)
route.get('/getreports', getReports)



module.exports = route