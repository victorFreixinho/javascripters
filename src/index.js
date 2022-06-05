import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from "./states/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
