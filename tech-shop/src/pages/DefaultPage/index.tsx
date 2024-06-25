import Footer from "home/Footer";
import Header from "home/Header";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
		<>
			<Header title="Shopping"/>
			<Outlet />
			<Footer />
		</>
  );
};

export default DefaultPage;
