import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {products, categories} from './data';
import AmazingStoreContext from './AmazingStoreContext';
import MainView from './MainView/MainView';
import CartView from './CartView/CartView';

export default class App extends Component {
  static contextType = AmazingStoreContext;

  state ={
    products: products,
    displayProducts: [],
    categories: categories,
    currCategoryId: 1,
    cartItems: [],
    searchVal: '',
    priceMin: '',
    priceMax: '',
    sort: 'featured'
  }

  filterByCategory = (catId) => {
    const displayProducts = products.filter(product => product.categoryId === this.state.currCategoryId);
    
    this.setState({
      displayProducts: displayProducts
    })
  }

  updateSearch = (val) => {
    this.setState({
      searchVal: val
    })
  }

  updateCurrCategory = (id) => {
    this.setState({
      currCategoryId: Number(id)
    })

    this.filterByCategory(id)
  }

  updatePriceMin = (val) => {
    this.setState({
      priceMin: Number(val)
    })
  }

  updatePriceMax = (val) => {
    this.setState({
      priceMax: Number(val)
    })
  }

  updateSort = (selection) => {
    this.setState({
      sort: selection
    })
  }

  componentDidMount() {
    this.filterByCategory(this.state.currCategoryId) // initializes state with items from first category
  }

  render() {
    const contextValue = {
      products: this.state.products,
      displayProducts: this.state.displayProducts,
      categories: this.state.categories,
      currCategoryId: this.state.currCategoryId,
      cartItems: this.state.cartItems,
      searchVal: this.state.searchVal,
      priceMin: this.state.priceMin,
      priceMax: this.state.priceMax,
      sort: this.state.sort,
      updateSearch: this.updateSearch,
      updateCurrCategory: this.updateCurrCategory,
      updatePriceMin: this.updatePriceMin, 
      updatePriceMax: this.updatePriceMax,
      updateSort: this.updateSort
    }

    return (
      <main className='App'>
        <AmazingStoreContext.Provider value={contextValue}>
          <Route
            exact
            path={'/'}
            component={MainView}/>
          <Route
            exact
            path={'/cart'}
            component={CartView}/>
        </AmazingStoreContext.Provider>
      </main>
    )
  }
};
