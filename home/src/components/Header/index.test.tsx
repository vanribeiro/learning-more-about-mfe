import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import Header from '.';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.useRealTimers();
});

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

    it('should back to home', async() => {

        act(() => {
            render(
                <MemoryRouter initialEntries={['/tech-shopping']}>
                    <Header title='Tech Shopping' arrowComponent={<ArrowBack />} />
                </MemoryRouter>
            );
        });

        const pageTitleTechShopping = screen.getByTestId('header-tech-shopping');
        expect(pageTitleTechShopping).toBeInTheDocument();

        const arrowBackIcon = screen.queryByTestId('back-button');
        if(arrowBackIcon) user.click(arrowBackIcon);

        await waitFor(() => {
            
            render(
                <MemoryRouter initialEntries={['/']}>
                    <Header title='Shopping' />
                </MemoryRouter>
            );

            const pageTitleHome = screen.getByTestId('header-shopping');
            expect(pageTitleHome).toBeInTheDocument();
        });

    });

});