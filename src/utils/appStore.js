import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js"
import filterReducer from "./filterSlice.js"

const AppStore=configureStore({
    reducer:{
        books: bookReducer,
        filter: filterReducer
    }
});
export default AppStore;