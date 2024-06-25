import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
