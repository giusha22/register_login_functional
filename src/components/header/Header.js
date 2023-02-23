import { AppBar, Badge, Button, styled, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar';
import { UserIcon } from './UserIcon';
// import { TiShoppingCart } from '/react-icons/ti'
import {BsCart3} from "react-icons/bs"
import { useCartItems } from '../../redux';
import { CartDrawer } from './CartDrawer';

const StyledAppBar = styled(AppBar)(()=>({
  background:'lightGreen',
  color:"#fff",
  paddingLeft:"270px",
  paddingRight:"50px",
  marginBottom:"100px",
  display:"flex",
  // padding:"0 100px 0 30px",
  width:"calc(100% -255px)",


}));
const StyledToolBar = styled(Toolbar)(()=>({
  display:"flex",
  width:"100%",
  justifyContent:"space-between",
}));
const StyledBadge = styled(Badge)(()=>({
  "& .MuiBadge-badge":{
    width:"20px",
    height:"21px",
    color:"white",
    background: "#F33451",
    top:"2px",
    right:"-3px"
  }
  }));

export const Header = () => {
    const navigate = useNavigate();
    const cartItems = useCartItems();
    console.log("cartItems",cartItems);
    const goInHome = ()=>{ navigate('/')};
    const cartItemsQuantity = cartItems.reduce((accumulate,current)=>accumulate+current.quantity,0)
    const [isCartOpen,setIsCartOpen] =useState(false);
    console.log("isCartOpen",isCartOpen);

  return (
    <Box>
        <StyledAppBar>
            <StyledToolBar>
                <Button variant='contained' onClick={()=>goInHome()} sx={{marginLeft:"10px"}} >Home</Button>
                <SearchBar/>
                <UserIcon/>
                <Button onClick={()=>setIsCartOpen(true)}>
                <StyledBadge badgeContent={cartItemsQuantity}>
                    <BsCart3 size={35} />
                  </StyledBadge>
                </Button>
                <CartDrawer isOpen={isCartOpen} onClose={()=>setIsCartOpen(false)}/>
            </StyledToolBar>
        </StyledAppBar>
    </Box>
  )
}
