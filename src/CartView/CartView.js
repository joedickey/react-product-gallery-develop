import React, { Component } from 'react';
import CartDetail from '../CartDetail/CartDetail';
import Header from '../Header/Header';
import './CartView.css';

export default class CartView extends Component {
  render() {
    return (
      <div className='CartView'>
        <Header />
        <div className='View_wrapper'>
            <div className='CartView_body'>
                <CartDetail />
            </div>
        </div>
      </div>
    )
  }
};
