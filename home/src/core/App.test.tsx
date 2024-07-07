import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe.skip('App component', () => {
    it('should render the provider component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const home = screen.getByText('Shopping');
        expect(home).toBeInTheDocument();
    });
});