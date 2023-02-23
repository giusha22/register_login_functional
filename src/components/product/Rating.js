import React from 'react'
import { Rating as MuiRating } from '@mui/material'

export const Ratings = ({value,isDisabled, onChange}) => {
  return (
    <MuiRating value={value} disabled={isDisabled} onChange={onChange} precision={0.5}/>
  )
}
