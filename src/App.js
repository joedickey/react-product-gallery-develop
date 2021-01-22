import React, { Component } from 'react';
import './App.css';
import {products, categories} from './data';

export default class App extends Component {
  render() {
    return (
      <div className="welcome-message">
        <h1>
          Welcome to your blank canvas!
        </h1>
        <p>
          Be sure to inspect and familiarize yourself with what data you will be working with. This is already imported for you from './data.js'.
        </p>
        <p>
          There are {products.length} products and {categories.length} categories.
        </p>
      </div>
    )
  }
};
