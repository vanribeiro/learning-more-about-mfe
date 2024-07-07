import { render, screen } from '@testing-library/react';
import Footer from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
    it('should render the footer component', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const footer = screen.getByText('van ribeiro');
        expect(footer).toBeInTheDocument();
    });
});