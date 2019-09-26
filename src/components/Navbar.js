import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {CartContext} from './CartContext';

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'center',
		listStyleType: 'none',
		padding: '5',
	},
	title: {
		marginRight: 'auto'
	}
}));

export default function Navbar() {
	const classes = useStyles();
	const [cart, setCart] = useContext(CartContext);
	const totalItems = cart.length;
	return(
		<React.Fragment>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar className={classes.toolbar} >
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						<Link to='/' style={{color: 'white'}}>
							TopView
						</Link>
					</Typography>
					<Link to='/cart' style={{color: 'white'}}>
					<ShoppingCartIcon  />
						{!totalItems ? null : totalItems}
					</Link>
					</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}
