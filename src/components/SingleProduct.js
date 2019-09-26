import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {CartContext} from './CartContext';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '10px'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function SingleProduct(props){
  const classes = useStyles();
  const id = props.match.params.id;
  const prod = props.products[id-1];

  const [cart, setCart] = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);


  const handleChange = event => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = (item, qty) => {
    const cartItem = cart.find(x => x.id === item.id);
		if(!cartItem) {
      item.quantity = Number(qty);
      setCart([...cart, item]);
    } else {
      item.quantity = item.quantity + Number(qty);
    }
  }

	return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={prod.name}
          height="140"
          image={prod.image}
          title={prod.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {prod.name}
          </Typography>
          <Typography>
            {`$${prod.price.toFixed(2)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <TextField
        id="quantity"
        select
        label="Quantity"
        className={classes.textField}
        value={quantity}
        onChange={handleChange}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your quantity"
        margin="normal"
      >
        {[1,2,3,4,5,6].map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
      <Button onClick={() => handleAddToCart(prod, quantity)} size="small" color="primary">
									Add to Cart
								</Button>
      </CardActions>
    </Card>
  );
}

