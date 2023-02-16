import { AppBar, Button, styled, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar';
import { UserIcon } from './UserIcon';

export const Header = () => {
    const navigate = useNavigate();
    const goInHome = ()=>{ navigate('/')};

    const StyledAppBar = styled(AppBar)(()=>({
        background:'lightGreen',
        color:"#fff",
        paddingLeft:"270px",
        paddingRight:"50px",
        marginBottom:"100px"
      
      }));
      const StyledToolBar = styled(Toolbar)(()=>({
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
      }));
  return (
    <Box>
        <StyledAppBar>
            <StyledToolBar>
                <Button variant='outlined' onClick={()=>goInHome()} sx={{marginLeft:"10px"}} >Home</Button>
                <SearchBar/>
                <UserIcon/>
            </StyledToolBar>
        </StyledAppBar>
    </Box>
  )
}
