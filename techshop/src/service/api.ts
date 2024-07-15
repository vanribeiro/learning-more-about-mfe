import { IFetchNews } from "../interfaces/fetch";

async function fetchData ({
    search,
    language,
    pageSize,
    sortBy
}: IFetchNews): Promise<Array<IFetchNews>> {
    const endpoint = `https://newsapi.org/v2/everything`;
    const apiKey = process.env.REACT_APP_NEWS_APY_KEY;
    const URI = `${endpoint}?q=${search}&language=${language}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const response = await fetch(URI);
    const result = await response.json();
    return result;
}

export {
    fetchData
}