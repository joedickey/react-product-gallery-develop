import React, { Component } from 'react';
import './CartSubtotal.css';

export default class CartSubtotal extends Component {
    //Hide subtotal if 0 items in cart?
  render() {
    return (
      <div className='CartSubtotal'>
        <h3>Items in Cart: 0 </h3>
        <h3>Subtotal: $0</h3>
      </div>
    )
  }
};
