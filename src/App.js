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
    currProduct: {},
    relatedProducts: [],
    categories: categories,
    currCategoryId: 1,
    cartItems: [],
    searchVal: '',
    priceMin: '',
    priceMax: '',
    sort: 'default',
    toastVisible: false
  }

  filterByCategory = (catId) => {
    const displayProducts = this.state.products.filter(product => product.categoryId === catId);

    this.setState({
      displayProducts: displayProducts
    })
  }

  filterBySearch = (str) => { // filter the current category by search string
    const lowCaseStr = str.toLowerCase().replace(/\s+/g, '') // makes search case insensitive and removes
    const displayProducts = this.state.products.filter(product => {
      const formatName = product.name.toLowerCase().replace(/\s+/g, '') // format product name same way as search string
      return formatName.includes(lowCaseStr) && product.categoryId === this.state.currCategoryId && product.price > this.state.priceMin && (product.price < this.state.priceMax || this.state.priceMax === '')}); // conditions to match currCat and priceMin/priceMax

    this.setState({
      displayProducts: displayProducts,
    })

  }

  filterByPrice = (min, max) => { // filters based on which values are entered (either both, just min, or just max)
    if(min !== '' && max !== '') {
      const displayProducts = this.state.products.filter(product => product.price > min && product.price < max && product.categoryId === this.state.currCategoryId)

      this.setState({
        displayProducts: displayProducts,
        searchVal: '', // clears search value and
        sort: 'default' // sets order to default on new price submit
      })
  
    } else if (min !== '') {
      const displayProducts = this.state.products.filter(product => product.price > min && product.categoryId === this.state.currCategoryId)

      this.setState({
        displayProducts: displayProducts,
        searchVal: '',
        sort: 'default'
      })
    } else if (max !== '') {
      const displayProducts = this.state.products.filter(product => product.price < max && product.categoryId === this.state.currCategoryId)

      this.setState({
        displayProducts: displayProducts,
        searchVal: '',
        sort: 'default'
      })
    } else {
      this.filterByCategory(this.state.currCategoryId) // when values are cleared it defaults to display all products in category
    }
  }

  sortBy = (selection) => {
    if(selection === 'default') {
      const sortedProducts = this.state.displayProducts.sort((a, b) => {
        return  a.id - b.id
      })

      this.setState({
        displayProducts: sortedProducts
      })
      
    } else if(selection === 'low to high') {
      const sortedProducts = this.state.displayProducts.sort((a, b) => {
        return a.price - b.price
      })

      this.setState({
        displayProducts: sortedProducts
      })
    } else if(selection === 'high to low') {
      const sortedProducts = this.state.displayProducts.sort((a, b) => {
        return  b.price - a.price
      })

      this.setState({
        displayProducts: sortedProducts,
      })
    }
  }

  addToCart = (id) => {
    const item = this.state.products.filter(product => product.id === Number(id))
    this.state.cartItems.push(item[0])
    this.setState({
      cartItems: this.state.cartItems
    })
  }

  removeFromCart = (idx) => {
    this.state.cartItems.splice(idx, 1) // using index instead of ID to avoid deleting all items of same kind at once in the cart

    this.setState({
      cartItems: this.state.cartItems
    })
  }
 
  updateSearch = (val) => {
    this.setState({
      searchVal: val,
      sort: 'default'
    })

    this.filterBySearch(val)
  }

  updateCurrProduct = (id) => {
    const currProduct = this.state.products.filter(product => product.id === Number(id))

    this.setState({
      currProduct: currProduct[0]
    })

    this.findRelatedProducts(currProduct[0])
  }

  findRelatedProducts = (currProd) => {
    const searchStr = currProd.name.slice(0, 2) // find related products based on first two letters of name in same category
    const relatedProducts = this.state.products.filter(product => product.name.includes(searchStr) && product.id !== currProd.id && product.categoryId === currProd.categoryId)

    if(relatedProducts.length > 3) { // limit results to max of 3
      const limitProducts = relatedProducts.slice(0, 3)

      this.setState({
        relatedProducts: limitProducts
      })

    } else {

      this.setState({
        relatedProducts: relatedProducts
      })
    }
  }

  updateCurrCategory = (id) => {
    this.setState({
      currCategoryId: Number(id),
      sort: 'default',
      searchVal: '',
      priceMin: '',
      priceMax: '',
    })

    this.filterByCategory(Number(id))
  }

  updatePriceMin = (val) => {
    this.setState({
      priceMin: Number(val)
    })
  }

  updatePriceMax = (val) => {
    if (val > 0) {
      this.setState({
        priceMax: Number(val)
      })
    } else {
      this.setState({
        priceMax: ''
      })
    }
  }

  updateSort = (selection) => {
    this.setState({
      sort: selection
    })

    this.sortBy(selection)
  }

  updateToastVisible = () => {
    this.setState({
      toastVisible: true
    });

    setTimeout(() => {
      this.setState({
          toastVisible: false
      });
    }, 1000);
  }

  componentDidMount() {
    this.filterByCategory(this.state.currCategoryId) // initializes state with items from first category
  }

  render() {
    const contextValue = {
      products: this.state.products,
      displayProducts: this.state.displayProducts,
      currProduct: this.state.currProduct,
      relatedProducts: this.state.relatedProducts,
      categories: this.state.categories,
      currCategoryId: this.state.currCategoryId,
      cartItems: this.state.cartItems,
      searchVal: this.state.searchVal,
      priceMin: this.state.priceMin,
      priceMax: this.state.priceMax,
      sort: this.state.sort,
      toastVisible: this.state.toastVisible,
      updateSearch: this.updateSearch,
      updateCurrCategory: this.updateCurrCategory,
      updatePriceMin: this.updatePriceMin, 
      updatePriceMax: this.updatePriceMax,
      updateSort: this.updateSort,
      filterByPrice: this.filterByPrice,
      updateCurrProduct: this.updateCurrProduct,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      updateToastVisible: this.updateToastVisible
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
