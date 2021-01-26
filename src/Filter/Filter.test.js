import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from './Filter';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <Filter />
        </Router>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});