import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { instance, isUserAdmin } from '../application'
import { setSelectedProduct, useUserInfo } from '../redux'
import { StyledButton } from '../Styles'

export const HomePage = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    instance.get("/products").then(({data}) =>setProducts(data.products));
  },[])
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goInEdit = (product)=>{
    navigate(`products/edit/${product.name}`)
    dispatch(setSelectedProduct({product:product}))
  }
  return (
    <Box>
      {isUserAdmin(userInfo) && products.map((item)=>{
        return( <div key={item._id}>
          <h1>{item.name}{item.price}</h1>
          <StyledButton variant='outlined' onClick={()=>goInEdit(item)}>Edit</StyledButton>
        </div> 
        
        )
      })
      }

     {!userInfo &&
       <Typography variant='h5'>There will be some kind of here section</Typography> 
     }
    </Box>
  )
}
