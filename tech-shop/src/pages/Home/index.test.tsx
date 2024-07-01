import { render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {

    it('should render the core component', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const component = screen.getByText('Available Components List');
        expect(component).toBeInTheDocument();
    });

});