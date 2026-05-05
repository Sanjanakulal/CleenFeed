import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// import UHome from '../UComponents/UHome'

import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import Addpost from '../UComponents/Addpost'
// import Products from '../UComponents/Products'
// import ProductDetails from '../UComponents/ProductDetails'
import Faq from '../UComponents/Faq'
import Login from '../UComponents/Login'
import MyProfile from '../UComponents/MyProfile'
import MyPosts from '../UComponents/MyPosts'
import HomeFeed from '../UComponents/HomeFeed'
import UpdatePost from '../UComponents/UpdatePost'
import TopBar from '../UComponents/TopBar'

function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/Register"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname) && <TopBar />}
      <Routes>
        
         <Route path='/UAbout' element={<UAbout/>}/> 
        <Route path='/' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/MyProfile' element={<MyProfile />} />
          <Route path='/Addpost' element={<Addpost/>} /> 
          <Route path='/MyPosts' element={<MyPosts/>} />
           <Route path='/HomeFeed' element={<HomeFeed/>} />
           <Route path='/Faq' element={<Faq/>} />
           <Route path='/UpdatePost/:id' element={<UpdatePost/>} />


          {/* <Route path='/' element={<Products/>} />
         <Route path='/product/:id' element={<ProductDetails/>} />
         <Route path='/faq' element={<Faq/>} />   */}


      </Routes>
    </div>
  )
}
export default function UserRoute() {
  return (
    <div>
      <AppContent />
    </div>
  )
}
