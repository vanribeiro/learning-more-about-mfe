interface IFetch {
    keywords?: string;
    language?: string;
    pageSize?: number;
}
declare function fetchData({ keywords, language, pageSize }: IFetch): Promise<any>;
export { fetchData };
