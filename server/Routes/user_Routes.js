const express = require('express')
const {registeruser,getuser,getuserbyid,deleteuser,updateuser,Login,getprofile,updateprofile} = require('../Controller/User_controller')
const auth = require("../Middlewear/Auth")
const route = express.Router();

route.post('/registeruser',registeruser)
route.get('/getuser',getuser)
route.get('/getuserbyid/:id',getuserbyid)
route.delete('/deleteuser/:id',deleteuser)
route.put('/updateuser/:id',updateuser)
route.post('/Login',Login)
route.get('/getprofile',auth,getprofile)  //auth acts as middleware and it verifies the token
route.put('/updateprofile',auth,updateprofile)

module.exports = route