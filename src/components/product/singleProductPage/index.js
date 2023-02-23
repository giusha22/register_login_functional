import { Box, Button, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSingleProductById, useCartItems, useSingleProduct } from '../../../redux';

const StyleBox = styled(Box)(() => ({
  marging: "auto",

  display: "flex",
  justifyContent: "center",
  margin: "auto",
}));

const StyleTypography = styled(Typography)(() => ({
  fontSize: "25px",
  marginBottom: "20px",
}));
const StyleButton = styled(Button)(() => ({
  fontSize: "20px",
  marginBottom: "20px",
  backgroundColor: "blue",
  color: "white",
  padding: "2px 80px",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "red",
  },
}));


export const DetailedProduct = () => {
    const { state } = useLocation();
    // console.log("state",state);
    const navigate = useNavigate();
    const cartItems = useCartItems();
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSingleProduct();
    console.log("singleProduct", singleProduct);
    useEffect(() => {
      dispatch(fetchSingleProductById({ id: state.id, category: categoryName }));
    }, [state.id]);
  
  return (
    <Box className="Si8ngleProductPage">
       <img src={singleProduct?.image} width="200px" height="200px" />
      <Box className="detailInfo">
        <StyleTypography> Name : {singleProduct?.name} </StyleTypography>
        <StyleTypography> Price : $ {singleProduct?.price} </StyleTypography>
        <StyleTypography>
          {" "}
          Color : {singleProduct?.description}{" "}
        </StyleTypography>
        <StyleTypography> Brand : {singleProduct?.brand} </StyleTypography>

        <StyleButton onClick={() => navigate("/")}> Go Home Page</StyleButton>
      </Box>
    </Box>
  )
}
