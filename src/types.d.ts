type Result = {
    id: number;
    title: string;
    country: string;
    year: string;
    format: string[];
    label: string[];
    genre: string[];
    resource_url: string;
    thumb: string;
}

type Pagination = {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: {
        next?: string;
        last?: string;
        first?: string;
        prev?: string;
    }
}
interface Releases {
    results: Result[];
    pagination: Pagination;
}

type TrackList = {
    position: string;
    title: string;
    duration: string;
}

type Community = {
    have: number;
    want: number;
    rating: {
        count: number,
        average: number
    }
}

interface Release {
    community: Community;
    released: string;
    styles: string[];
    tracklist: TrackList[];
}