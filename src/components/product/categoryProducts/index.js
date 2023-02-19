import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchCategoryProducts } from '../../../redux';
import { CategoryProductList } from './CategoryProductList';
import { Paginate } from './Paginate';

export const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  console.log("categoryName",categoryName);
  useEffect(()=>{
    dispatch(fetchCategoryProducts(`${categoryName}?page=1&size=1&sort=name asc`))
  },[categoryName])
  return (
    <Box>
      <CategoryProductList/>
      <Paginate/>
    </Box>
  )
}
