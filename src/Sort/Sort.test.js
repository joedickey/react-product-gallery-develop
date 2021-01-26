import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sort from './Sort';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <Sort />
        </Router>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});