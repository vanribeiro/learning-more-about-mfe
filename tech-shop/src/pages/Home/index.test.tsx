import { render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {

    it('should render the core component', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const component = screen.getByTestId('home');
        expect(component).toBeInTheDocument();
    });

});