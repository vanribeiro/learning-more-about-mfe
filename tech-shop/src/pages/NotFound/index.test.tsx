import { act, render, screen } from '@testing-library/react';
import NotFound from '.';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound component', () => {

    it('should render with no errors', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <NotFound />
                </BrowserRouter>  
            )
        });
        
        const component = screen.getByText('Page not found');
        expect(component).toBeInTheDocument();
    });

});