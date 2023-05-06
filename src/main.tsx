import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import "./index.css";
import { AppStateContextProvider } from "./contexts/AppStateContext.tsx";
import GameDesign from "./pages/GameDesign.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game-design",
    element: <GameDesign />,
  },
]);

const theme = extendTheme({
  fonts: {
    Electrolize: `Electrolize, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppStateContextProvider>
        <RouterProvider router={router} />
        <CustomCursor />
      </AppStateContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
