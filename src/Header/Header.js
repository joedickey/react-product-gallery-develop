import React, { Component } from 'react';
import CartSubtotal from '../CartSubtotal/CartSubtotal';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1 className='Header_title'>Amazing Store</h1>
        <SearchBar />
        <CartSubtotal />
      </div>
    )
  }
};
