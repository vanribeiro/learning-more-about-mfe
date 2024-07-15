import { RequestNews } from "../types/request-news";

async function fetchData ({
    search,
    language,
    pageSize,
    sortBy
}: RequestNews): Promise<Array<RequestNews>> {
    const source: string = `https://newsapi.org/v2/everything`;

    const apiKey: string | undefined = process.env.REACT_APP_NEWS_APY_KEY;

    const URI: string = `${source}?q=${search}` + 
                        `&language=${language}&sortBy=${sortBy}` + 
                        `&pageSize=${pageSize}&apiKey=${apiKey}`;

    const response: Response = await fetch(URI);
    const result: Promise<Array<RequestNews>> = await response.json();
    return result;
}

export {
    fetchData
}