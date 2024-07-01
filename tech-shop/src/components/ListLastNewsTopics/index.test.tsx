import { render, screen } from '@testing-library/react';
import { server } from '../../tests/services/node';
import ListLastNewsTopics from '.';

beforeAll(() => {
    return server.listen();
});

afterEach(() => {
    return server.resetHandlers();
});

afterAll(() => {
    return server.close();
})

describe('ListLastNewsTopics component', () => {

    it('should render with no errors', () => {
        render(<ListLastNewsTopics />);
        const techNews = screen.getByText('Tech News');
        expect(techNews).toBeInTheDocument();
    });

});