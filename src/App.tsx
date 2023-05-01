import { useEffect, useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
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
    checkFontLoad();
  }, []);

  return isFontLoaded ? <Home /> : null;
};

export default App;
