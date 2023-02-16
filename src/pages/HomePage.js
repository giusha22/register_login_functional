import { Box, Typography } from '@mui/material'
import React from 'react'
import { useUserInfo } from '../redux'

export const HomePage = () => {
  const userInfo = useUserInfo();
  return (
    <Box>
     {userInfo &&
       <Typography variant='h5'>This is a home page</Typography> 
     }
    </Box>
  )
}
