import React, { Component } from 'react';
import './MainView.css';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import ProductList from '../ProductList/ProductList';

export default class MainView extends Component {
  render() {
    return (
      <div className='MainView'>
        <Header />
        <div className='View_wrapper'>
            <div className='MainView_body'>
                <Sidebar />
                <ProductList />
            </div>
        </div>
      </div>
    )
  }
};
