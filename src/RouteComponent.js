import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { isUserAdmin, ProtectedRoute } from './application'
import { HomePage, LoginPage, ProductFormPage, ProfilePage, RegisterPage } from './pages'
import { useUserInfo } from './redux'

export const RouteComponent = () => {
  const userInfo = useUserInfo();
  return (
   <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/products/new' element={ <ProtectedRoute hasAccess={isUserAdmin(userInfo)}> <ProductFormPage/> </ProtectedRoute> }/>
      <Route path='/profile' element={ <ProtectedRoute hasAccess={isUserAdmin(userInfo)}> <ProfilePage/> </ProtectedRoute> }/>
     <Route path='/products/edit/:name' element={ <ProtectedRoute hasAccess={isUserAdmin(userInfo)}> <ProductFormPage/> </ProtectedRoute> }/>
   </Routes>
  )
}
