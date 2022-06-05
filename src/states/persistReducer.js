import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createFilter } from "redux-persist-transform-filter";

const persistReducers = (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["session"],
      // lets just save the 'token' and 'signed' fields from session.
      // Saving 'error' filed cause a huge bug in alert message inside login component.
      transforms: [
        createFilter("session", ["token", "signed", "refreshToken"]),
      ],
    },
    reducers
  );

  return persistedReducer;
};

export default persistReducers;
