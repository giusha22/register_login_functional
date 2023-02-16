import { Box, styled } from '@mui/material'
import React from 'react'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar/Sidebar';
import { RouteComponent } from './RouteComponent'

const StyledContentContainer = styled(Box)(()=>({
  padding:"20px",
  marginLeft:"255px",
  marginTop:"70px",
  background:"white",
  minHeight:"100vh"
}));

const App = () => {
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