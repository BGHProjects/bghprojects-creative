import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CustomCursor from "./components/CustomCursor.tsx";
import { AppStateContextProvider } from "./contexts/AppStateContext.tsx";
import "./index.css";
import GameDesign from "./pages/GameDesign.tsx";
import Home from "./pages/Home.tsx";
import LoadAssets from "./pages/LoadAssets.tsx";
import {
  gameDesignFonts,
  gameDesignImages,
} from "./consts/gameDesignAssets.ts";
import { GameDesignContextProvider } from "./contexts/GameDesignContext.tsx";
import ConceptArt from "./pages/ConceptArt.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadAssets PageToLoad={() => <Home />} fonts={gameDesignFonts} />,
  },
  {
    path: "/game-design",
    element: (
      <LoadAssets
        PageToLoad={() => (
          <GameDesignContextProvider>
            <GameDesign />
          </GameDesignContextProvider>
        )}
        fonts={gameDesignFonts}
        images={gameDesignImages}
      />
    ),
  },
  {
    path: "/concept-art",
    element: (
      <LoadAssets PageToLoad={() => <ConceptArt />} fonts={gameDesignFonts} />
    ),
  },
]);

const theme = extendTheme({
  fonts: {
    Electrolize: `Electrolize, sans-serif`,
    Quicksand: `Quicksand, sans-serif`,
    Exo2: `Exo2, sans-serif`,
    Iceland: `Iceland, sans-serif`,
    Lora: `Lora, sans-serif`,
    Varela: `Varela, sans-serif`,
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
