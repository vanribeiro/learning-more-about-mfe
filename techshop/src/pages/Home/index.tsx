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
                  <Typography variant='body2'>
                    Tech Shopping
                  </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <Link to="/list-last-news-topics">
                  <Typography variant='body2'>
                    List Last News - Topics
                  </Typography>
                </Link>
            </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Home;