import { fireEvent, render, screen } from '@testing-library/react';
import { server } from './tests/services/node';
import App from './App';

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

    
    it('should have a back button the provider component', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /voltar/i});
        expect(button).toBeInTheDocument();
    });

    it('should click on back button', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /voltar/i});
        fireEvent.click(button);
        // expect(button).toBeInTheDocument();
    });
});