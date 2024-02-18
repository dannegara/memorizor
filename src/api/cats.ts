const BASE_URL = "https://api.thecatapi.com/";

type CatsResponse = Array<{
  id: string;
  url: string;
  width: number;
  height: number;
}>;

export const getCatsImages = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}v1/images/search?limit=10`);

  const cats = (await res.json()) as CatsResponse;

  return cats.map((cat) => cat.url);
};
