interface INews {
    title: string | null;
    urlToImage?: string;
    author?: string | null;
    source?: {
        name: string | null;
    };
    publishedAt: string;
    description?: string;
    url: string;
}
export default INews;
