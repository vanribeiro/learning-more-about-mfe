import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from 'techshop/Products';
import DefaultPage from './pages/DefaultPage';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='/tech-shopping' element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;
