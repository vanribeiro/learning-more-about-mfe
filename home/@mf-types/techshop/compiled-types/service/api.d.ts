import { IFetchNews } from "../interfaces/fetch";
declare function fetchData({ search, language, pageSize, sortBy }: IFetchNews): Promise<Array<IFetchNews>>;
export { fetchData };
