import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

interface ILoadAssets {
  PageToLoad: () => JSX.Element;
  fonts?: { name: string; url: string }[];
  images?: string[];
}

const LoadAssets = ({ PageToLoad, fonts, images }: ILoadAssets) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const checkLoadAssets = async (
    fonts: { name: string; url: string }[] | undefined,
    images: string[] | undefined
  ) => {
    try {
      if (fonts) {
        const fontPromises = fonts.map(
          async (font: { name: string; url: string }) => {
            const fontFace = new FontFace(font.name, `url(${font.url})`);
            await fontFace.load();
            document.fonts.add(fontFace);
          }
        );

        await Promise.all([...fontPromises]);
      }

      if (images) {
        const imagePromises = images.map(async (imageSrc) => {
          const image = new Image();
          await new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = reject;
            image.src = imageSrc;
          });
        });

        await Promise.all([...imagePromises]);
      }

      setIsFontLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLoadAssets(fonts, images);
  }, []);

  return isFontLoaded ? <PageToLoad /> : <LoadingPage />;
};

export default LoadAssets;
