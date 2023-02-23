import { Button, Drawer, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart, saveCart, useCartItems, useUserInfo } from '../../redux'
import { Typography } from '../shared'
const StyledBox = styled(Box)(()=>({
    width:300,
    display:"flex",
    justifyContent:"space-around",
  }))
export const CartDrawer = ({isOpen, onClose}) => {
    const cartItems = useCartItems();
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right">
        {cartItems.map((item)=>{
           const {product, quantity} = item
           const {price,name, id}= product
           return(
            <StyledBox key={id}>
                <Typography>{name}</Typography>
                <Typography>{quantity}</Typography>
                <Typography>{price * quantity}</Typography>
            </StyledBox>
           )  
        })}
            <Button onClick={()=>{
        dispatch(clearCart())
        dispatch(saveCart({userId:userInfo._id, cartItems:[]}))
    }}>clear cart</Button>
    {userInfo && <Button onClick={()=>{
        dispatch(saveCart({userId:userInfo._id,cartItems}))
    }}>save cart </Button> } 
    </Drawer>
  )
}
