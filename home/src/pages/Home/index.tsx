import { Container } from "@mui/material";
import Banner from "../../components/Banner";
import ListLastNewsTopics from 'techshop/ListLastNewsTopics';

const Home = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <ListLastNewsTopics />
      </Container>
    </>
  );
};

export default Home;
