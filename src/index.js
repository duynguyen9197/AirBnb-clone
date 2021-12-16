import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/constants/config.css";
import { ConfirmProvider } from "material-ui-confirm"
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={Slide}
        autoHideDuration={2000}
        disableWindowBlurListener={true}
      >
        <ConfirmProvider>
          <App />
        </ConfirmProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
