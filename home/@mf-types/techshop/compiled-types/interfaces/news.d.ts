interface INews {
    title: string;
    urlToImage?: string;
    author?: string;
    source?: {
        name: string;
    };
    publishedAt: string;
    description?: string;
    url: string;
}
export default INews;
