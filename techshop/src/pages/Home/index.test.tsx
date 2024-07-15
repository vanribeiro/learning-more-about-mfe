import { act, render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {

    it('should render the core component', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        });
        
        const component = screen.getByTestId('home');
        expect(component).toBeInTheDocument();
    });

});