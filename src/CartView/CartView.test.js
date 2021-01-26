import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CartView from './CartView';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <CartView />
        </Router>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});