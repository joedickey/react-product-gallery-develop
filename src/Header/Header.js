import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartSubtotal from '../CartSubtotal/CartSubtotal';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <Link to={'/'}>
          <h1 className='Header_title'>Amazing Store</h1>
        </Link>
        <SearchBar />
        <CartSubtotal/>
      </div>
    )
  }
};
