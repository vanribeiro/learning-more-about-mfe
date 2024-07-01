import { act, render, screen } from '@testing-library/react';
import Products from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Products component', () => {

    it('should render with no errors', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <Products />
                </BrowserRouter>  
            );
        });
        
        const component = screen.getByText('Impressoras');
        expect(component).toBeInTheDocument();
    });

});