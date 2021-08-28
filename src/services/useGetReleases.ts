import { useQuery } from "react-query";

const BASE_URL = "https://api.discogs.com";

const fetchReleases = async (query: string, page: number = 1): Promise<Releases> => {
    const response = await fetch(
        `${BASE_URL}/database/search?q=${query}&type=release&page=${page}&per_page=20`,
        {
            headers: {
                "Authorization": `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`
            }
        });
    return response.json();
}

export const useGetReleases = (query: string, page: number) => {
    return useQuery(
        ["allReleases", query, page],
        () => fetchReleases(query, page),
        {
            keepPreviousData: true,
            enabled: !!query
        }
    );
}