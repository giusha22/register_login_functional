import { MenuItem, Select } from '@mui/material'
import React from 'react'

export const Sort = ({ sort="", changePage, changeSort, }) => {
  return (
    <Select value={sort} onChange={((e)=>{
        console.log("sort",e.target.value);
        changeSort("sort",e.target.value)
        changePage("page", 1)
    })}>
        <MenuItem value="price,desc">ფასის კლებადობით</MenuItem>
        <MenuItem value="price,asc">ფასის ზრდადობით</MenuItem>
        <MenuItem value="name,desc">სახელი კლებადობით</MenuItem>
        <MenuItem value="name,asc">სახელი ზრდადობით </MenuItem>


    </Select>
  )
}
