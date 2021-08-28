const BASE_URL = "https://api.discogs.com";

export const fetchReleases = async (query: string, page: number = 1) => {
    const response = await fetch(
        `${BASE_URL}/database/search?q=${query}&type=release&page=${page}&per_page=20`,
        {
            headers: {
                "Authorization": `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`
            }
        });
    return response.json();
}