import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TechNews from 'techfeed/TechNews';
import Sidebar from "../../components/Siderbar";

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <TechNews />
      <Footer />
    </>
  );
};

export default Home;
