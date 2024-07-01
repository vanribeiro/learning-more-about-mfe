import React from 'react';
import {Container, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Container maxWidth="xl">
        <Typography component="h3" variant="h3" gutterBottom>
            Home
        </Typography>
        <p>Just a Micro Front-end</p>
        <List>
            <ListItem>
                <Link to="/">
                    Home
                </Link>
            </ListItem>
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