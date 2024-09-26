import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// import IncomeReducer from "./IncomeSlice";
// import expenseReducer from "./expenseSlice";
// import transcationReducer from "./transcationSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    // income: IncomeReducer,
    // expense: expenseReducer,
    // transcation: transcationReducer,
  },
});
export default store;
