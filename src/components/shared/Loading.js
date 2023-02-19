import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress variant="solid" />
    </Box>
  )
}
