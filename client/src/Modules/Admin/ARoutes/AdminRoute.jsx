import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../AComponents/AdminLogin'
// import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ManageUser from '../AComponents/ManageUser'
import ManageCategory from '../AComponents/ManageCategory'
import AddCategory from '../AComponents/AddCategory'
import ManageReports from '../AComponents/ManageReports'

// import ManageCategory from '../AComponents/ManageCategory'
// import ManageProduct from '../AComponents/ManageProduct'
// import AddCategory from '../AComponents/AddCategory'
// import ViewUser from '../AComponents/ViewUser'
// import ViewProduct from '../AComponents/ViewProduct'
// import ViewCategory from '../AComponents/ViewCategory'
// import UpdateCategory from '../AComponents/UpdateCategory'
// import UpdateProduct from '../AComponents/UpdateProduct'




export default function AdminRoute() {
    return (
        <div>
           
            <Routes>
                <Route path='/' element={<Sidebar />}>
                 <Route path='/AdminLogin' element={<AdminLogin/>}/>
                 <Route path='/ManageUser' element={<ManageUser/>}/>
                 <Route path='/ManageCategory' element={<ManageCategory/>}/>
                 <Route path='/AddCategory' element={<AddCategory/>}/>
                 <Route path='/ManageReports' element={<ManageReports/>}/>
                  </Route>
            </Routes>
        </div>
    )
}
