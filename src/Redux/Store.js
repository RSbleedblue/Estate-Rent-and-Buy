import { configureStore } from "@reduxjs/toolkit";
import EstateSlice from "./Slices/EstateSlice";

const Store = configureStore({
    reducer:{
        estate:EstateSlice,
    }
})
export default Store;