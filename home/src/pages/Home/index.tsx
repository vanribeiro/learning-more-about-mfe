import { Box, Container } from "@mui/material";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListLastNewsTopics from 'techshop/ListLastNewsTopics';

const Home = () => {
  return (
    <>
      <Header title="Shopping" />
      <Banner />
      <Container maxWidth="xl">
        <ListLastNewsTopics />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
