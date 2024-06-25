import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TechNews from 'techshop/TechNews';
import DefaultPage from './pages/DefaultPage';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='/tech-news' element={<TechNews />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;
