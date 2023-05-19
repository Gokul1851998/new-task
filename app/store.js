import { configureStore } from "@reduxjs/toolkit";
import addUserData from "../slices/fetchUserData";

const store = configureStore({
reducer:{
        user : addUserData
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: false,
}), 

})

export default store
