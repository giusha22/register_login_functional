import { Box, Card, CardActions, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUserAdmin } from '../../application';
import { addToCart, removeFromCart, setSelectedProduct, useCartItems, useUserInfo } from '../../redux';
import { StyledButton } from '../../Styles';

const StyledCardContent = styled(Box)(()=>({
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
}));

const StyledBox = styled(Box)(()=>({
  display:"flex",
  justifyContent:"space-between",
}));

export const ProductCard = ({name, _id, image, price, category, brand, description }) => {
 const dispatch = useDispatch();
 const cartItems = useCartItems();
//  console.log("cartItems",cartItems);
 const userInfo = useUserInfo(); 
 const navigate = useNavigate();

const isProductInCart = cartItems?.find((item)=>item.product._id === _id);
const onEdit = ()=>{
  dispatch(setSelectedProduct({
    product:{
      name,_id,image,price,description,brand, category,
    }
  }))
  navigate(`/products/edit/${name}`)
}
  return (
    <Grid item >
      <Card>
        <img src={image} alt={`${category} ${name}`} width="200px" height="200px"/>
        <StyledCardContent>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
          <Typography>{brand}</Typography>
          <Typography>{description}</Typography>
        </StyledCardContent>
          <CardActions>
            <StyledBox>
              {isProductInCart ? (
                <>
              <StyledButton variant='contained' onClick={()=>dispatch(addToCart({_id, price, name }))}>+</StyledButton>
              <StyledButton variant='contained' onClick={()=>dispatch(removeFromCart(_id))}>-</StyledButton>
                </> )
               :<>
                <StyledButton variant='contained' onClick={()=>dispatch(addToCart({_id, price, name }))}>Add To Cart</StyledButton>
               </>
              }
              {isUserAdmin(userInfo) &&
                <StyledButton variant='contained' onClick={onEdit}>Edit</StyledButton>

              }
              </StyledBox>
          </CardActions>
      </Card>
    </Grid>
  )
}
