import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './../tests/services/node'

beforeAll(() => {
    return server.listen();
});

afterEach(() => {
    return server.resetHandlers();
});

afterAll(() => {
    return server.close();
})

describe('App component', () => {
    it('should render the consumer component', () => {
        render(<App />);
        const feed = screen.getByText('Consumer');
        expect(feed).toBeInTheDocument();
    });
});