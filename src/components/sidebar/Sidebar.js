import { Box, Drawer } from '@mui/material'
import React from 'react'
import { SidebarHeader } from './SidebarHeader'

const array = ["item 1","item 2","item 3","item 4","item 5","item 6","item 7", ]

export const Sidebar = () => {
  return (
    <Drawer 
    variant='permanent' sx  ={{display: {xs: "block"},"& .MuiDrawer-paper": 
    { width:"255px",height:"95%",},
    }} open={true}>
        <SidebarHeader/>
        <Box>
            {array.map((item)=>{
                return <h1 key={item} >{item}</h1>
            })}
        </Box>
    </Drawer>
  )
}
