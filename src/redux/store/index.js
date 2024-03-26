// import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";

// const store = configureStore({
//   reducer: mainReducer,
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import queryReducer from "../reducers/queryReducer";

const unifiedReducer = combineReducers({
  favourites: favouritesReducer,
  searchResults: queryReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
