import Header from "../../components/Header";
import IFrame from "../../components/IFrame";
import TechNews from 'techfeed/TechNews';

const Home = () => {
  return (
    <>
      <h1>Provider</h1>
      <a href="http://localhost:2000">Home</a>
      <IFrame>
        <Header />
      </IFrame>
      <TechNews />
    </>
  );
};

export default Home;
