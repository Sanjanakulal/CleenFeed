const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addpost,getpost,getpostbyid,deletepost,updatepost} = require('../Controller/Post_controller');

const route = express.Router();

const upload = require('../Middlewear/imageupload')

route.post('/addpost',upload.single('postimage'),addpost)
route.get('/getpost',getpost)  
route.get('/getpostbyid/:id',getpostbyid)
route.delete('/deletepost/:id',deletepost)
route.put('/updatepost/:id', upload.single('postimage'), updatepost)



module.exports = route