import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import TechShopping from "./pages/TechShopping";
import NotFound from "./pages/NotFound";

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<DefaultPage />}>
					<Route index element={<Home />} />
				</Route>
				<Route
					path="/tech-shopping"
					element={<TechShopping />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default Router;
