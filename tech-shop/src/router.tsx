import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Products, LastNewsTopics } from './pages';

const Router = () => {
  return (
    <>
        <BrowserRouter>
          <React.StrictMode>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tech-shopping' element={<Products />} />
                <Route path='/list-last-news-topics' element={<LastNewsTopics />} />
            </Routes>
          </React.StrictMode>
        </BrowserRouter>
    </>
  );
};

export default Router;
