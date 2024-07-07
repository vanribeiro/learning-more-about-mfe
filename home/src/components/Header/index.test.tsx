import { render, screen, waitFor } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
    it('should render the Header component', async() => {
        render(
            <BrowserRouter>
                <Header title='Shopping'/>
            </BrowserRouter>
        );

        await waitFor(() => {
            const header = screen.getByText('Shopping');
            expect(header).toBeInTheDocument();
        });

    });

});