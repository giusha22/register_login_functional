import { Pagination } from '@mui/material'
import React from 'react'

export const Paginate = ({totalPages,currentPage, changePage, queryKey}) => {
  return (
    <Pagination
    count= {totalPages}
    page= {+currentPage}
    
    />
  )
}
