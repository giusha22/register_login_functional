import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import  storage  from "redux-persist/lib/storage";
import { cartReducer } from "./slice/CartSlice";
import { productReducer } from "./slice/ProductSlice";
import { userReducer } from "./slice/userSlice";


const persistConfig ={
    key:"root",
    storage,
    whiteList:["user"],
};
const rootReducer = combineReducers ({
    user:userReducer,
    product:productReducer,
    cart:cartReducer,
});
const persistedReducer= persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({  
        serializableCheck:false,
    }),
});
export const persistor = persistStore(store)

export { authenticateUser,
             logoutUser,
  } from "./slice/userSlice";
export {
    //async thunks
     saveProduct,
    fetchHomePageProducts,
    fetchCategoryProducts,
    fetchQueryProducts,
    fetchSingleProductById,
    rateProduct,

    //reducer
     setSelectedProduct,
     clearEditFields,
     setSearchResults,
     } from "./slice/ProductSlice";

export {
    //async thunks

    saveCart,
    fetchCart,
    //reducer

    addToCart,
     removeFromCart,
      clearCart
    } from "./slice/CartSlice";

export const useUserInfo = ()=>useSelector((state)=>state.user.userData);
export const useSelectedProduct = ()=>useSelector((state)=>state.product.selectedProduct);
export const useHomePageProducts = ()=>useSelector((state)=>state.product.homePageProducts);
export const useCategories = ()=>useSelector((state)=>state.product.categories);
export const useCategoryProducts = ()=>useSelector((state)=>state.product.categoryProducts);
export const useCartItems = ()=>useSelector((state)=>state.cart.cartItems);
export const useSearchResults = ()=>useSelector((state)=>state.product.searchResults);
export const useSingleProduct = () =>useSelector((state) => state.product.singleProduct);