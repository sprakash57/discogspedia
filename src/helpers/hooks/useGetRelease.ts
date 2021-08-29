import { useQuery } from "react-query";

const fetchRelease = async (release: number): Promise<Release> => {
    const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/releases/${release}`,
        {
            headers: {
                "Authorization": `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`
            }
        });
    return response.json();
}

const useGetReleases = (release: number) => {
    return useQuery(
        ["release", release],
        () => fetchRelease(release),
        { cacheTime: 1000 } // Always pull fresh data on mount
    );
}

export default useGetReleases;