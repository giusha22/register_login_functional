import { Box, Card, CardActions, Grid, Rating, styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isUserAdmin } from '../../application';
import { addToCart, rateProduct, removeFromCart, setSelectedProduct, useCartItems, useUserInfo } from '../../redux';
import { StyledButton } from '../../Styles';
import { Ratings } from './Rating';

const StyledCardContent = styled(Box)(()=>({
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
}));

const StyledBox = styled(Box)(()=>({
  display:"flex",
  justifyContent:"space-between",
}));

export const ProductCard = ({name, _id, image, price, category, brand, description,averageRating }) => {
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
};
const {pathname, search} = useLocation();
// console.log("location",`${pathname}${search}` );

const onRatingChange =(e)=>{
  console.log("e.target.value",e.target.value);
  dispatch(rateProduct({ productId:_id, userId:userInfo?._id,
   url:`${category}${search}&size=2`,
   isHome: pathname ==="/",
   rating: e.target.value,
 }))
}
  return (
    <Grid item >
      <Card style={{ padding: "20px", borderRadius: "30px"}}>
          <Link
            to={`/products/categories/${category}/${name}`}
            state={{ id: _id }}
            replace={true}
            style={{ textDecoration: "none" }}
          >
        <img src={image} alt={`${category} ${name}`} width="200px" height="200px"/>
        <StyledCardContent>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
          <Typography>{brand}</Typography>
          <Typography>{description}</Typography>
        </StyledCardContent>
        </Link>
          <CardActions>
            <Ratings value={averageRating} isDisabled={!userInfo} onChange={onRatingChange}/>
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
