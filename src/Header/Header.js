import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AmazingStoreContext from '../AmazingStoreContext';
import CartSubtotal from '../CartSubtotal/CartSubtotal';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default class Header extends Component {
  static contextType = AmazingStoreContext;

  render() {
    return (
      <div className='Header'>
        <Link to={'/'}>
          <h1 className='Header_title'>Amazing Store</h1>
        </Link>
        <div className={`Header_toast ${this.context.toastVisible ? 'toast_visible' : ''}`}> 
          Item Added.
        </div>
        <SearchBar />
        <CartSubtotal/>
      </div>
    )
  }
};
