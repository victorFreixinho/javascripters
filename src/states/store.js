import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import session from "./modules/session";
import thunk from "redux-thunk";
import users from "./modules/users";
import persistReducers from "./persistReducer";
import diseases from "./modules/diseases";

const reducers = combineReducers({
  session,
  users,
  diseases,
});

const store = configureStore({
  reducer: persistReducers(reducers),
  middleware: [thunk],
});

const persistor = persistStore(store);

export { persistor, store };
