import { useState, useEffect } from "react";
import { getCatsImages } from "@api/cats";

export const useCatsImages = () => {
  const [catsImages, setCatsImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      const catsImagesResult = await getCatsImages({
        signal: abortController.signal,
      });

      setCatsImages(catsImagesResult);
      setIsLoading(false);
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    isLoading,
    catsImages,
  };
};
