import React from "react";
import { Route, Switch } from "react-router-dom"
import Data from '../../bikerentals.json';
import Home from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Checkout from './Checkout'
import Cart from './Cart';

const products = Data.products;

export default function Routes (){
	return (
    <Switch>
        <Route exact path="/" render={() => <Home products={products} /> } />
        <Route exact path="/products/" render={() => <Products products={products} /> } />
        <Route exact path="/products/:id" render={(props) => <SingleProduct {...props} products={products} /> } />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
      </Switch>
        );
      }

