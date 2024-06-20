import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('should render the provider component', () => {
        render(<App />);
        const home = screen.getByText('Provider');
        expect(home).toBeInTheDocument();
    });
});