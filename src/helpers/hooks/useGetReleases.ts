import { useQuery } from "react-query";

const fetchReleases = async (query: string | undefined, page: number = 1): Promise<Releases> => {
    const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/database/search?q=${query}&type=release&page=${page}&per_page=20`,
        {
            headers: {
                "Authorization": `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`
            }
        });
    return response.json();
}

const useGetReleases = (query: string | undefined, page: number) => {
    return useQuery(
        ["allReleases", query, page],
        () => fetchReleases(query, page),
        {
            keepPreviousData: true,
            enabled: typeof query === "string"
        }
    );
}

export default useGetReleases;