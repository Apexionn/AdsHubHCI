import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./state/theme/dark-mode.jsx";
import App from "./App.jsx";
import "./global.css";
import ToasterLayout from "./components/layout/toast.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./redux.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
          <ToasterLayout>
            <App />
          </ToasterLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
