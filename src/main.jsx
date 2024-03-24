import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "toastify-js/src/toastify.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>
);
