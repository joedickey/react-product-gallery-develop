import React from 'react';

const AmazingStoreContext = React.createContext({
    products: [],
    displayProducts: [],
    currProduct: {},
    relatedProducts: [],
    categories: [],
    currCategoryId: '',
    cartItems: [],
    searchVal: '',
    priceMin: '',
    priceMax: '',
    sort: '',
    updateSearch: () => {},
    updateCurrCategory: () => {},
    updatePriceMin: () => {}, 
    updatePriceMax: () => {},
    updateSort: () => {},
    filterByPrice: () => {},
    updateCurrProduct: () => {},
    addToCart: () => {},
    removeFromCart: () => {}
})

export default AmazingStoreContext;