import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInitials, isUserAdmin } from '../../application';
import { logoutUser, useUserInfo } from '../../redux';
import { StyledButton } from '../../Styles';

export const UserIcon = () => {
    const [anchor,setAnchor] = useState(null);
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
    // console.log("userInfo",userInfo);

    const goInRegister = ()=>{navigate('/register')};
    const goInLogin = ()=>{navigate('/login')};
    const goInProfilePage = ()=>{navigate('/profile')};
    const goInAddProduct = ()=>{navigate('/products/new')};



    const handleClose = ()=>{setAnchor(null)};

  return (
    <Box>
        <IconButton onClick={(e)=>{ setAnchor(e.currentTarget) }}>
            <Avatar sx={{width:"45px", height:"45px"}}>
                {getUserInitials(userInfo?.firstName, userInfo?.lastName)}
            </Avatar>
        </IconButton>
        <Box>
          
        <Menu anchorEl={anchor} anchorOrigin={{ vertical:"bottom",horizontal:"right" }}
          keepMounted transformOrigin={{ vertical:"top", horizontal:"left" }}
          open={Boolean(anchor)} onClose={handleClose}> 
          
          {isUserAdmin(userInfo)  && <MenuItem>
          <StyledButton variant='outlined' onClick={()=>goInAddProduct()}>Add Product</StyledButton>
            </MenuItem> 
          }
          {!!userInfo &&
          <MenuItem>
            <StyledButton variant='outlined' onClick={()=>goInProfilePage()}>Profile Page</StyledButton>
            <StyledButton variant='outlined' onClick={()=>dispatch(logoutUser())} >Logout</StyledButton>

            </MenuItem>}
            {!userInfo &&
          <MenuItem>
            <StyledButton variant='outlined' onClick={()=>goInRegister()}>Register</StyledButton>
            <StyledButton variant='outlined' onClick={()=>goInLogin()}>Login</StyledButton>
            </MenuItem>}
          
            
          </Menu>
       </Box>
    </Box>
  )
}
