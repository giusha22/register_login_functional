import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useQueryParam } from '../../../application';
import { fetchCategoryProducts, useCategories, useCategoryProducts } from '../../../redux';
import { CategoryProductList } from './CategoryProductList';
import { Paginate } from './Paginate';
import { Sort } from './Sort';

export const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  // console.log("categoryName",categoryName);
  const { value:page, changeQueryValue:changePage } = useQueryParam("page");
  const { value:sort, changeQueryValue:changeSort } = useQueryParam("sort");
  const categoryProducts = useCategoryProducts();
  console.log("categoryProducts",categoryProducts.totalPages);

  useEffect(()=>{
    dispatch(fetchCategoryProducts(`${categoryName}?page=${page}&size=1&sort=${sort}`))
  },[categoryName, page, sort])
  return (
    <Box>
      <Sort changePage={changePage} changeSort={changeSort} sort={sort}/>
      <CategoryProductList />
      <Paginate 
      currentPage={page} 
      totalPages={categoryProducts.totalPages}
      changePage={changePage}
      queryKey= "page"
      
      />
    </Box>
  )
}
