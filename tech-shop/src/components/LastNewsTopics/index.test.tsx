import { act, render, screen, waitFor } from '@testing-library/react';
import LastNewsTopics from '.'
import INews from '../../interfaces/news';
import newsList from '../../tests/mocks/news';

describe('LastNewsTopics component', () => {

    it('should render with no errors', async () => {
        const topic: INews = newsList[0];
        act(() => {
            render(<LastNewsTopics {...topic} />);
        })
    });

    it('should render \'Título da notícia indisponível\' quando o title is null', async () => {
        const topic: INews = newsList[1];
        act(() => {
            render(<LastNewsTopics {...topic} />);
        });

        await waitFor(() => {
            const title = screen.getByText('Título da notícia indisponível');
            expect(title).toBeInTheDocument();
        });

    });

});