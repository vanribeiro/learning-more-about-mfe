import { render, screen } from '@testing-library/react';
import LastNewsTopics from '.';
import { BrowserRouter } from 'react-router-dom';

describe('LastNewsTopics component', () => {

    it('should render with no errors', () => {
        render(
            <BrowserRouter>
                <LastNewsTopics />
            </BrowserRouter>
        );
        const component = screen.getByTestId('list-last-news-topics');
        expect(component).toBeInTheDocument();
    });

});