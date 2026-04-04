const express = require('express')
const {registeruser,getuser,getuserbyid,deleteuser,updateuser,Login} = require('../Controller/User_controller')

const route = express.Router();

route.post('/registeruser',registeruser)
route.get('/getuser',getuser)
route.get('/getuserbyid/:id',getuserbyid)
route.delete('/deleteuser/:id',deleteuser)
route.put('/updateuser/:id',updateuser)
route.post('/Login',Login)

module.exports = route