import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../application";

export const  saveProduct = createAsyncThunk(
    "product/saveProduct",
    async ({ product, isUpdating }, { dispatch }) => {
      const endpoint = isUpdating ? `/products/${product.id}` : "/products";
      const method = isUpdating ? "put" : "post";
      const { data } = await instance[method](endpoint, { product });
      return data;
    }
  );

const ProductSlice = createSlice({
    name:"product",
    initialState:{
        loading:false,
        selectedProduct:null,
        error:null,
    },
    reducers:{
      setSelectedProduct:(state,action)=>{
        state.selectedProduct= action.payload.product
      },
      // clearEditFields:(state)=>{
      //   state.product.selectedProduct = null
      // },
    },

    extraReducers:(builder)=>{
        builder.addCase(saveProduct.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(saveProduct.fulfilled, (state) => {
            state.loading = false;
          });
          builder.addCase(saveProduct.rejected, (state) => {
            state.loading = false;
            state.error = "something went wrong (saveProduct)";
          });
    }
});

export const { setSelectedProduct } = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;