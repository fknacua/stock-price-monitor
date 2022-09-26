import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appParams from "./reducers/params.rdc";
import stocks from "./reducers/stock.rdc";

export const store = configureStore({
    reducer: {
        appParams,
        stocks
    }
});

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    appParams,
    stocks
})
  
  export const setupStore = preloadedState => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }


  