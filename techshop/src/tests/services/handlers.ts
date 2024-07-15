import { http, HttpResponse, HttpHandler } from 'msw';
import newsList from '../mocks/news';
 
const handlers: Array<HttpHandler> = [
  http.get('https://newsapi.org/v2/everything', () => {
    return HttpResponse.json(newsList)
  }),
];

export {
    handlers
};