import { render, screen } from '@testing-library/react';
import Banner from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Banner component', () => {
    it('should render the Banner component', () => {
        render(
            <BrowserRouter>
                <Banner />
            </BrowserRouter>
        );
        
        const banner = screen.getByText('Tecnologia para o seu dia a dia');
        expect(banner).toBeInTheDocument();
    });
});