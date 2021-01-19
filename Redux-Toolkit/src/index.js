import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import Store from "./components/redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
