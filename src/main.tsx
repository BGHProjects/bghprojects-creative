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
import GraphicDesign from "./pages/GraphicDesign.tsx";
import { GraphicDesignContextProvider } from "./contexts/GraphicDesignContext.tsx";
import { GenAIArtContextProvider } from "./contexts/GenAIArtContext.tsx";
import GenAIArt from "./pages/GenAIArt.tsx";
import { UIUXDesignContextProvider } from "./contexts/UIUXDesignContext.tsx";
import UIUXDesign from "./pages/UIUXDesign.tsx";
import HowImLearning from "./pages/HowImLearning.tsx";

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
    element: <LoadAssets PageToLoad={() => <ConceptArt />} />,
  },
  {
    path: "/graphic-design",
    element: (
      <LoadAssets
        PageToLoad={() => (
          <GraphicDesignContextProvider>
            <GraphicDesign />
          </GraphicDesignContextProvider>
        )}
      />
    ),
  },
  {
    path: "/ui-ux-design",
    element: (
      <LoadAssets
        PageToLoad={() => (
          <UIUXDesignContextProvider>
            <UIUXDesign />
          </UIUXDesignContextProvider>
        )}
      />
    ),
  },
  {
    path: "/gen-ai-art",
    element: (
      <LoadAssets
        PageToLoad={() => (
          <GenAIArtContextProvider>
            <GenAIArt />
          </GenAIArtContextProvider>
        )}
      />
    ),
  },
  {
    path: "/how-im-learning",
    element: <LoadAssets PageToLoad={() => <HowImLearning />} />,
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
    Vollkorn: `Vollkorn, sans-serif`,
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
