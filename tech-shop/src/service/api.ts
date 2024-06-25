async function fetchData (
    q: string ='tech',
    language: string ='pt',
    pageSize: number = 24
) {
    const endpoint = `https://newsapi.org/v2/everything`;
    const URL = `${endpoint}?q=${q}&language=${language}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_APY_KEY}`;
    const response = await fetch(URL);
    const result = await response.json();
    return result;
}

export {
    fetchData
}