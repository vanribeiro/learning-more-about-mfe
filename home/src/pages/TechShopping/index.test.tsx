import { render, screen, waitFor } from '@testing-library/react';
import TechShopping from '.';
import { BrowserRouter } from 'react-router-dom';

jest.mock('techshop/Products');
jest.mock('techshop/ListLastNewsTopics');

describe('TechShopping component', () => {
    it('should render the TechShopping component', async() => {
        render(
            <BrowserRouter>
                <TechShopping/>
            </BrowserRouter>
        );

        await waitFor(() => {
            const techShopping = screen.getByText('Tech Shopping');
            expect(techShopping).toBeInTheDocument();
        });

    });

});