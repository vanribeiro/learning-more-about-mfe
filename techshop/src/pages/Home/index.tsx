import {Container, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Container maxWidth="xl" data-testid="home">
        <Typography component="h3" variant="h3" gutterBottom>
            Home
        </Typography>
        <Typography variant='body1'>
          Main micro front-end components for the React application.
        </Typography>
        <List>
            <ListItem>
                <Link to="/tech-shopping">
                    Tech Shopping
                </Link>
            </ListItem>
            <ListItem>
                <Link to="/list-last-news-topics">
                    List Last News - Topics
                </Link>
            </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Home;