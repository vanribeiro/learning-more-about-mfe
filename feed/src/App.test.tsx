import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('should render the consumer component', () => {
        render(<App />);
        const feed = screen.getByText('Consumer');
        expect(feed).toBeInTheDocument();
    });
});