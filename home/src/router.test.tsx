import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './router';

describe('Router', () => {
    it('should render home page when the path is "/"', () => {
        const route = '/';
        render(
            <MemoryRouter initialEntries={[route]}>
                <Router />
            </MemoryRouter>
        );

        const pageTitle = screen.getByText('Shopping');
        expect(pageTitle).toBeInTheDocument();
    });

    it('should render tech shopping page when the path is "/tech-shopping"', () => {
        const route = '/tech-shopping';
        render(
            <MemoryRouter initialEntries={[route]}>
                <Router />
            </MemoryRouter>
        );

        const pageTitle = screen.getByTestId('header-tech-shopping').querySelector('h1')?.textContent;
        expect(pageTitle).toBe('Tech Shopping');
    });

    it('should render not found page when the path is not matched', () => {
        const route = '/not-found';

        render(
            <MemoryRouter initialEntries={[route]}>
                <Router />
            </MemoryRouter>
        );

        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('Page not found')).toBeInTheDocument();
        expect(screen.getByText('Voltar para Home')).toBeInTheDocument();
    });
});