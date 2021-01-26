import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import { Link } from 'react-router-dom'
import { sumBy } from 'lodash';
import './CartDetail.css';

export default class CartDetail extends Component {
  static contextType = AmazingStoreContext;

  handleClick = (e, callback) => {
    callback(e.target.id)
  }

  render() {
    const cartSubtotal = sumBy(this.context.cartItems, item => item.price)
    const cartItems = this.context.cartItems.map((item, idx) => {
      return (
        <AmazingStoreContext.Consumer key={`cart_${idx}${item.id}`}>
          {({removeFromCart}) => (
            <div className='CartDetail_item' id={item.id}>
              <div className='CartDetail_left'>
                <img className='CartDetail_image' src={item.images.medium} alt={item.name}></img>
                <p className='CartDetail_name' >{item.name}</p>
              </div>
              <div className='CartDetail_right'>
                <p className='CartDetail_price' >${item.price.toFixed(2)}</p>
                <button className='CartDetail_remove' type='button' id={item.id} onClick={(e)=> this.handleClick(e, removeFromCart)}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </AmazingStoreContext.Consumer>
      )
    })
    return (
      <div className='CartDetail'>
        <h2 className='CartDetail_title'>My Cart</h2>
        <div className='CartDetail_display'>
            {cartItems.length > 0 ? cartItems : 'Cart is Empty'}
        </div>
        <hr></hr>
        <div className='CartDetail_bottom'>
          <Link to={'/'}>
            <button type='button'>
              Back to Shop
            </button>
          </Link>
          <h3 className='CartDetail_subtotal'>Subtotal: ${cartSubtotal.toFixed(2)}</h3>
        </div>
      </div>
    )
  }
};
