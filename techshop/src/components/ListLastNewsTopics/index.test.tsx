import { act, render, screen, waitFor } from '@testing-library/react';
import { server } from '../../tests/services/node';
import ListLastNewsTopics from '.';
import { fetchData } from '../../service/api';

jest.mock('../../service/api');

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('ListLastNewsTopics component', () => {

    it('should render with no errors', async () => {
      const mockData = {
        articles: [
          {
            title: 'News 1',
            source: {
                name: 'Source 1',
            },
            publishedAt: '2022-02-01',
            url: 'https://example.com/news1',
          },
          {
            title: 'News 2',
            source: {
                name: 'Source 2',
            },
            publishedAt: '2022-02-02',
            url: 'https://example.com/news2',
          },
        ],
      };
    
      (fetchData as jest.Mock).mockResolvedValue(mockData);
    
      act(() => {
        render(<ListLastNewsTopics />);
      });
    
      await waitFor(() => {
        const techNews = screen.queryByText('Tech News');
        expect(techNews).toBeInTheDocument();
        expect(screen.getByTestId('list-last-news-topics')).toBeInTheDocument();
        expect(screen.getByText('News 1')).toBeInTheDocument();
        expect(screen.getByText('News 2')).toBeInTheDocument();
        expect(screen.getByText('31/01/2022 - Source 1')).toBeInTheDocument();
        expect(screen.getByText('01/02/2022 - Source 2')).toBeInTheDocument();
        expect(screen.getByTestId('last-news-topics-0')).toHaveAttribute(
          'href',
          'https://example.com/news1'
        );
        expect(screen.getByTestId('last-news-topics-1')).toHaveAttribute(
          'href',
          'https://example.com/news2'
        );
      });
    
    });

});
