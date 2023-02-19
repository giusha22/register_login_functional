import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { instance } from './application';
import { Header } from './components/header'
import { Sidebar } from './components/sidebar/Sidebar';
import { RouteComponent } from './RouteComponent'
import { fetchHomePageProducts } from './redux';
const StyledContentContainer = styled(Box)(()=>({
  padding:"20px",
  marginLeft:"255px",
  marginTop:"70px",
  background:"white",
  minHeight:"100vh"
}));

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchHomePageProducts())
  },[])
  return (
    <Box>
        <Header/>
        <Sidebar/>
        <StyledContentContainer>
           <RouteComponent/>
        </StyledContentContainer>
    </Box>
  )
}

export default App