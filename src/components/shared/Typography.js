import React from 'react'
import { Typography } from '@mui/material'

export const TypographyComponent = ({ variant= "outlined",children }) => {
  return (
    <Typography variant={variant}>{children}</Typography>
  )
}
