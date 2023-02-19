import { Grid } from '@mui/material';
import React from 'react'
import { useHomePageProducts } from '../../redux'
import { GridComponent } from '../shared';
import { ProductCard } from './ProductCard';

export const HomePageProducts = () => {
    const HomeProduct = useHomePageProducts();
    console.log("HomeProduct",HomeProduct);
  return (
    <GridComponent>
      {HomeProduct.map((product)=>{
        return <ProductCard key={product._id} {...product }/>
      })}
    </GridComponent> 
  )
}
