import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import CartDetail from '../CartDetail/CartDetail';
import './CartView.css';

export default class CartView extends Component {
  render() {
    return (
      <div className='CartView'>
        <Header />
        <div className='View_wrapper'>
            <div className='CartView_body'>
                <Sidebar />
                <CartDetail />
            </div>
        </div>
      </div>
    )
  }
};
