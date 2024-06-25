interface IFetch {
    keywords?: string;
    language?: string;
    pageSize?: number;
}

async function fetchData ({
    keywords = 'technology',
    language = 'pt',
    pageSize = 24
}: IFetch) {
    const endpoint = `https://newsapi.org/v2/everything`;
    const URL = `${endpoint}?q=${keywords}&language=${language}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_APY_KEY}`;
    const response = await fetch(URL);
    const result = await response.json();
    return result;
}

export {
    fetchData
}