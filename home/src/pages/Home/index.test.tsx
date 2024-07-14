import Home from '.';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { act, render, screen, waitFor } from '@testing-library/react';

jest.mock('techshop/ListLastNewsTopics');

describe('Home component', () => {
    it('should render the component with no errors', () => {
        
        render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            );

        const component = screen.getByText('Home Office');
        expect(component).toBeInTheDocument();

    });

});