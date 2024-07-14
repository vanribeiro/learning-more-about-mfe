import { Container } from "@mui/material";

import Banner from "../../components/Banner";
import { ErrorBoundary } from "react-error-boundary";

import ListLastNewsTopics from "techshop/ListLastNewsTopics";

const Home = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <ListLastNewsTopics />
        </ErrorBoundary>
      </Container>
    </>
  );
};

export default Home;
