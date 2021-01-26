import React from 'react';

const AmazingStoreContext = React.createContext({
    products: [],
    displayProducts: [],
    currProduct: {},
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
    updateCurrProduct: () => {}
})

export default AmazingStoreContext;