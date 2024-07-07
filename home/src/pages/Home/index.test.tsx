import React from 'react';
const ListLastNewsTopics = React.lazy(() => import("techshop/ListLastNewsTopics"));

jest.mock('techshop/ListLastNewsTopics', 
    () => ({ ListLastNewsTopics: () => ListLastNewsTopics}),
    { virtual: true }
);

import Home from '.';
import { BrowserRouter } from 'react-router-dom';
import { act } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

const container = document.createElement('div');
document.body.appendChild(container);

describe.skip('Home component', () => {
    it('should render the component with no errors', async() => {
        
        await act(async () => {
            ReactDOM
                .createRoot(container)
                .render(
                    <BrowserRouter>
                        <Home />
                    </BrowserRouter>
                );
        });

        const component = container.querySelector('.banner__cta h4');
        expect(component?.textContent).toBe('Home Office');

    });
});