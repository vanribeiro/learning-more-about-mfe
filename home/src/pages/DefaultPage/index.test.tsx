import { render, screen, waitFor } from '@testing-library/react';
import DefaultPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Default Page component', () => {
    it('should render the Header component', async() => {
        render(
            <BrowserRouter>
                <DefaultPage />
            </BrowserRouter>
        );

        await waitFor(() => {
            const header = screen.getByText('Shopping');
            expect(header).toBeInTheDocument();
        });

    });

    it('should render the footer component', () => {
        render(
            <BrowserRouter>
                <DefaultPage />
            </BrowserRouter>
        );
        const footer = screen.getByText('van ribeiro');
        expect(footer).toBeInTheDocument();
    });

});