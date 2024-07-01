import { act, render, screen, waitFor } from '@testing-library/react';
import { server } from '../../tests/services/node';
import ListLastNewsTopics from '.';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('ListLastNewsTopics component', () => {

    it('should render with no errors', async () => {

        act(() => {
            render(<ListLastNewsTopics />);
        });

        await waitFor(() => {
            const techNews = screen.queryByText('Tech News');
            expect(techNews).toBeInTheDocument();
        });

    });

});

