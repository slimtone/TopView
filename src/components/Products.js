import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {CartContext} from './CartContext';

const useStyles = makeStyles(theme => ({
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

export default function Products(props) {
	const prods = props.products;
	const classes = useStyles();
  const [cart, setCart] = useContext(CartContext);

	const handleAddToCart = (prod) => {
		const cartItem = cart.find(x => x.id === prod.id);
		if(!cartItem) {
			prod.quantity = 1;
			setCart([...cart, prod]);
		} else {
			prod.quantity+=1;
			setCart([...cart]);
		}
	}

	return(
			<Container className={classes.cardGrid} maxWidth="md">
			<Grid container spacing={4}>
				{prods.map(prod => (
					<Grid item key={prod.id} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={prod.image}
								title={prod.name}
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h6" component="h2">
									{prod.name}
								</Typography>
								<Typography>
									{`$${prod.price.toFixed(2)}`}
								</Typography>
							</CardContent>
							<CardActions>
								<Link to={{pathname: `/products/${prod.id}`,
									state: {cart: cart, products: prod}}}
									className={classes.links}>
								<Button size="small" color="primary">
								View
								</Button>
								</Link>
								<Button onClick={() => handleAddToCart(prod)} size="small" color="primary">
									Add to Cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			</Container>
		)
}
