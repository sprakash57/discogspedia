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