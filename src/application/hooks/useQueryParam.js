import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQueryParam = (key) => {
  const [params, setParams] = useSearchParams();
//   console.log("sort",params.get("sort"));
//   console.log("page",params.get("page"));
  const changeQueryValue = (key, value)=>{
    params.set(key, value)
    setParams(params);
    // setParams({ page: 5 })
  }

  return{
    value: params.get(key),
    changeQueryValue,
  }
}
