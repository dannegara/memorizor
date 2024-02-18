import { useState, useEffect } from "react";
import { getCatsImages } from "@api/cats";

export const useCatsImages = () => {
  const [catsImages, setCatsImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const catsImagesResult = await getCatsImages();
      setCatsImages(catsImagesResult);
      setIsLoading(false);
    })();
  }, []);

  return {
    isLoading,
    catsImages,
  };
};
