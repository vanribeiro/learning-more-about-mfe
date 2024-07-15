import { RequestNews } from "../types/request-news";
declare function fetchData({ search, language, pageSize, sortBy }: RequestNews): Promise<Array<RequestNews>>;
export { fetchData };
