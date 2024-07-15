import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Router from './Router';
import { Home, Products, LastNewsTopics, NotFound } from './pages';

// Mock the pages
jest.mock('./pages', () => ({
  Home: () => <div>Home Page</div>,
  Products: () => <div>Products Page</div>,
  LastNewsTopics: () => <div>Last News Topics Page</div>,
  NotFound: () => <div>404, Page Not Found</div>,
}));

describe('Router Component', () => {
  it('should renders Home component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('should renders Products component for the /tech-shopping path', () => {
    render(
      <MemoryRouter initialEntries={['/tech-shopping']}>
        <Routes>
            <Route path='/tech-shopping' element={<Products />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Products Page')).toBeInTheDocument();
  });

  it('should renders LastNewsTopics component for the /list-last-news-topics path', () => {
    render(
      <MemoryRouter initialEntries={['/list-last-news-topics']}>
        <Routes>
            <Route path='/list-last-news-topics' element={<LastNewsTopics/>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Last News Topics Page')).toBeInTheDocument();
  });

  it('should renders 404 page for an unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument();
    expect(screen.queryByText('Products Page')).not.toBeInTheDocument();
    expect(screen.queryByText('Last News Topics Page')).not.toBeInTheDocument();
  });

  it('should renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});