import { useEffect, useState } from "react";
import Home from "./pages/Home";
import LoadingPage from "./pages/LoadingPage";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const checkFontLoad = async () => {
    const font = new FontFace(
      "Open Sans",
      'url("/assets/fonts/Electrolize/Electrolize-Regular.ttf")'
    );
    try {
      await font.load();
      document.fonts.add(font);
      setIsFontLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkFontLoad();
  }, []);

  return isFontLoaded ? <Home /> : <LoadingPage />;
};

export default App;
