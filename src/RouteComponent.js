import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { isUserAdmin, ProtectedRoute } from './application'
import { CategoryProductPage, HomePage, LoginPage, ProductFormPage, ProfilePage, RegisterPage, SingleProductPage } from './pages'
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
     <Route path='/products/categories/:categoryName' element={<CategoryProductPage/>}/>
     <Route
          path="/products/categories/:categoryName/:name"
          element={<SingleProductPage />}
        />
   </Routes>
  )
}
