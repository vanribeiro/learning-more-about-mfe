import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "techshop/Products";
import DefaultPage from "./pages/DefaultPage";
import React from "react";
import TechShopping from "./pages/TechShopping";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<React.StrictMode>
					<Routes>
						<Route path="/" element={<DefaultPage />}>
							<Route index element={<Home />} />
						</Route>
						<Route
							path="/tech-shopping"
							element={<TechShopping />}
						/>
					</Routes>
				</React.StrictMode>
			</BrowserRouter>
		</>
	);
};

export default Router;
