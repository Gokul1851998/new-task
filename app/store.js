import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./fetchUserData";
import inputReducer from "./inputData"
import tableReducer from "./tableData"



export default configureStore({
    reducer : {
        users:usersReducer,
        input:inputReducer,
        table:tableReducer
    }
})