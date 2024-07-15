import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LastNewsTopics from '.';
import { server } from '../../tests/services/node';

beforeAll(() => {
    return server.listen();
});

afterEach(() => {
    return server.resetHandlers();
});

afterAll(() => {
    return server.close();
});

describe('LastNewsTopics component', () => {

    it('should render with no errors', async () => {

        act(() => {
            render(<LastNewsTopics />, { wrapper: BrowserRouter });
        });

        await waitFor(() => {
            const component = screen.queryByTestId('list-last-news-topics');
            expect(component).toBeInTheDocument();
        });

    });

});