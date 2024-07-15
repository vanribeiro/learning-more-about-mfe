import { http, HttpResponse } from 'msw';
import newsList from '../mocks/news';
 
const handlers = [
  http.get('https://newsapi.org/v2/everything', () => {
    return HttpResponse.json(newsList)
  }),
];

export {
    handlers
};