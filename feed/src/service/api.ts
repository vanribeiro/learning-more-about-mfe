async function fetchData () {
    const URL = `https://newsapi.org/v2/everything?q=tech&language=pt&pageSize=24&apiKey=${process.env.REACT_APP_NEWS_APY_KEY}`;
    const response = await fetch(URL);
    const result = await response.json();
    return result;
}

export {
    fetchData
}