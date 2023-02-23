import { Autocomplete, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQueryProducts, setSearchResults, useSearchResults } from '../../redux';
import { Typography } from '../shared';
export const SearchBar = () => {
  const [searchValue,setSearchValue] = useState('');
  const searchResults = useSearchResults();
  // console.log("searchResults",searchResults);
  const dispatch = useDispatch();
  useEffect(()=>{
    const timerId = setTimeout(() => {
      // console.log("value", searchValue);
      if (searchValue) {
        //რექვესთის გაგზავნა 
        dispatch(fetchQueryProducts(searchValue));
      }else {
        dispatch(setSearchResults());
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  },[searchValue])
  // console.log("searchValue",searchValue);
  return (
    <Autocomplete
     freeSolo
    sx={{ width : 300 }}
    // disableClearable
    options={searchResults}
    getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        // console.log("option",option);
        const { name, category, _id, price} = option;
        return (
          <Link
            to={`/products/categories/${category}/${name}`}
            key={_id}
            state={{ id: _id }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography>{name}</Typography>
              <Typography>{price}</Typography>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Search Product"
            InputProps={{
              ...params.InputProps,
              Type: "search",
            }}
          />
        );
      }}
    />
  );
    
}