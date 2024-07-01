import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Products, LastNewsTopics, NotFound } from './pages';

const Router = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tech-shopping' element={<Products />} />
          <Route path='/list-last-news-topics' element={<LastNewsTopics />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
