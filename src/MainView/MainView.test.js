import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AmazingStoreContext from '../AmazingStoreContext';
import MainView from './MainView';
import {products, categories} from '../data';


it('renders without crashing', () => {
    const div = document.createElement('div');

    const value = {
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
        sort: 'default'
    }

    ReactDOM.render(
        <AmazingStoreContext.Provider value={value}>
            <Router>
                <MainView />
            </Router>
        </AmazingStoreContext.Provider>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});