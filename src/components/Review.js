import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {CartContext} from './CartContext';
import {CheckoutContext} from './CheckoutContext';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
	const [cart, setCart] = useContext(CartContext);
	const [values, setValues] = useContext(CheckoutContext);
	const payments = [
		{ name: 'Card holder:', detail: values.cardName },
		{ name: 'Card number:', detail: values.cardNumber },
		{ name: 'Expiry date:', detail: values.expDate },
	];
	let totalPrice = 0

	cart.map(product => {
		totalPrice = totalPrice + product.price * product.quantity;
	})
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
				{cart.map(product => (
					<ListItem className={classes.listItem} key={product.id}>
					<ListItemText primary={`${product.name} x ${product.quantity}`} secondary={product.product_type} />
					<Typography variant="body2">{`$${product.price.toFixed(2)}`}</Typography>
          </ListItem>
				))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {`$${totalPrice.toFixed(2)}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${values.firstName} ${values.lastName}`}</Typography>
          <Typography gutterBottom>{values.address1}</Typography>
          <Typography gutterBottom>{values.address2}</Typography>
          <Typography gutterBottom>{`${values.city}, ${values.region}`}</Typography>
          <Typography gutterBottom>{`${values.zip}, ${values.country}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
