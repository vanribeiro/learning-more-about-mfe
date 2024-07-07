import React from 'react';

const Products = React.lazy(() => import("techshop/Products"));

jest.mock('techshop/Products', 
    () => ({ Products: () => Products}),
    { virtual: true }
);


import { render, screen, waitFor } from '@testing-library/react';
import TechShopping from '.';
import { BrowserRouter } from 'react-router-dom';


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