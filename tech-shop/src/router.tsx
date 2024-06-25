import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import { TechNews } from './pages';
import ProductsList from './pages/Products';
import React from 'react';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<TechNews />} />
                    <Route path='/tech-shopping' element={<ProductsList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;
