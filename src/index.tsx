import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "Providers/AuthProvider";
import { ThemeProvider } from "Providers/ThemeProvider";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { BeatLoader } from "react-spinners";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <BeatLoader
          color="#3e5853"
          loading
          margin={5}
          size={20}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        />}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
