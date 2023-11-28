import { useQuery } from "react-query";

const fetchRelease = async (release: number): Promise<Release> => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/releases/${release}`,
    {
      headers: {
        Authorization: `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`,
      },
    }
  );
  return response.json();
};

const useGetRelease = (release: number) => {
  return useQuery(["release", release], () => fetchRelease(release), {
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useGetRelease;
