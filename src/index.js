import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store from "../src/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
