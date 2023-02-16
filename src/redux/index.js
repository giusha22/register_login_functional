import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import  storage  from "redux-persist/lib/storage";
import { userReducer } from "./slice/userSlice";


const persistConfig ={
    key:"root",
    storage,
    whiteList:["user"],
};
const rootReducer = combineReducers ({
    user:userReducer,
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

export { authenticateUser,  } from "./slice/userSlice";

export const useUserInfo = ()=>useSelector((state)=>state.user.userData);
