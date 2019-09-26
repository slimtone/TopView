import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Products from './Products';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  links: {
    textDecoration: 'none'
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const prods = props.products;

    return (
      <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to TopView
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Rent our bikes and other products down below
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to="/products" className={classes.links}>
                <Button variant="contained" color="primary">
                  View all products
                </Button>
                </Link>
                </Grid>
                <Grid item>
                  <Link to="cart">
                    <Button variant="outlined" color="primary">
                      Checkout
                   </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      <Products products={prods} />
      </main>
      <Footer />
    </React.Fragment>
    );
  }


export default Home;
