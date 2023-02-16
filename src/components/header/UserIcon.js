import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserInitials } from '../../application';
import { useUserInfo } from '../../redux';
import { StyledButton } from '../../Styles';

export const UserIcon = () => {
    const [anchor,setAnchor] = useState(null);
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    console.log("userInfo",userInfo);

    const goInRegister = ()=>{navigate('/register')};
    const goInLogin = ()=>{navigate('/login')};
    const handleClose = ()=>{setAnchor(null)};

  return (
    <Box>
        <IconButton onClick={(e)=>{ setAnchor(e.currentTarget) }}>
            <Avatar>
                {getUserInitials(userInfo?.firstName, userInfo?.lastName)}
            </Avatar>
        </IconButton>
        <Box>
        <Menu anchorEl={anchor} anchorOrigin={{ vertical:"bottom",horizontal:"right" }}
          keepMounted transformOrigin={{ vertical:"top", horizontal:"left" }}
          open={Boolean(anchor)} onClose={handleClose}> 
          <MenuItem>
            <StyledButton variant='outlined' onClick={()=>goInRegister()}>Register</StyledButton>
            <StyledButton variant='outlined' onClick={()=>goInLogin()}>Login</StyledButton>
            </MenuItem>
          </Menu>
       </Box>
    </Box>
  )
}
