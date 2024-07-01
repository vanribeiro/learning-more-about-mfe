import { render, screen } from '@testing-library/react';
import LastNewsTopics from '.'
import INews from '../../interfaces/news';
import newsList from '../../tests/mocks/news';

describe('LastNewsTopics component', () => {

    it('should render with no errors', () => {
        const topic: INews = newsList[0];
        render(<LastNewsTopics {...topic} />);
    });

    it('should render \'Título da notícia indisponível\' quando o title is null', () => {
        const topic: INews = newsList[1];
        render(<LastNewsTopics {...topic} />);

        const title = screen.getByText('Título da notícia indisponível');
        expect(title).toBeInTheDocument();
    });

});