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
    toastVisible: false,
    updateSearch: () => {},
    updateCurrCategory: () => {},
    updatePriceMin: () => {}, 
    updatePriceMax: () => {},
    updateSort: () => {},
    filterByPrice: () => {},
    updateCurrProduct: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    updateToastVisible: () => {}
})

export default AmazingStoreContext;