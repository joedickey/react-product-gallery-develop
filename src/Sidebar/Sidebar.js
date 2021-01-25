import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <Categories />
        <Filter />
        <Sort />
      </div>
    )
  }
};
