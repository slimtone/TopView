import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {CartContext} from './CartContext';
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: '10',
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginLeft: theme.spacing(2),
	},
	button: {
		textDecoration: 'none',
		margin: 'auto',
		display: 'block'
	}
}));

export default function Cart() {
	const classes = useStyles();
	const [cart, setCart] = useContext(CartContext);

	let totalPrice = 0;
	let totalItems = 0;
	let isValid = false;
	let bikeCount = 0;

	cart.map(product => {
		totalPrice = totalPrice + product.price * product.quantity;
		totalItems = totalItems + product.quantity;
		if(product.product_type === 'bike') bikeCount++;
		if(product.product_type !== 'bike' && bikeCount === 0 ? isValid = false : isValid = true);
	})
  return (
		<React.Fragment>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Cart
      </Typography>
      <List disablePadding>
        {cart.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
						<ListItemText primary={`${product.name} x ${product.quantity}`} secondary={product.product_type} />
						<ListItemText>
			``</ListItemText>
            <Typography variant="body2">{`$${product.price.toFixed(2)}`}</Typography>
					</ListItem>
					))}
					<ListItem className={classes.listItem}>
						<ListItemText primary={`Subtotal (${totalItems} items)`} />
						<Typography variant="subtitle1" className={classes.total}>
						{`$${totalPrice.toFixed(2)}`}
						</Typography>
					</ListItem>
					{isValid ? <Link to='/checkout'>
					<Button color="primary" className={classes.button}>Proceed to checkout</Button>
					</Link> : 'You need to rent a bike to proceed to checkout' }
      </List>
      </React.Fragment>
      )}

