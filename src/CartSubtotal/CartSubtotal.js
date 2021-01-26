import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import { Link } from 'react-router-dom'
import { sumBy } from 'lodash';
import './CartSubtotal.css';

export default class CartSubtotal extends Component {
    static contextType = AmazingStoreContext;

  render() {
    const cartSubtotal = sumBy(this.context.cartItems, item => item.price)

    return (
      <div className='CartSubtotal'>
        <h3>Items in Cart:</h3>
        <h3>{this.context.cartItems.length}</h3>
        <h3>Subtotal:</h3>
        <h3>${cartSubtotal.toFixed(2)}</h3>
        <Link to={'/cart'}>
          <p id='view_cart'>View Cart</p>
        </Link>
      </div>
    )
  }
};
