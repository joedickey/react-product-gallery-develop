import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './SearchBar.css';

export default class SearchBar extends Component {
    static contextType = AmazingStoreContext;

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

  render() {

    return (
      <div className='SearchBar'>
        <AmazingStoreContext.Consumer>
            {({updateSearch}) => (
                <form className='SearchBar_form'>
                    <label htmlFor='search'></label>
                    <input className='SearchBar_input' type='text' id='search' name='search' value={this.context.searchVal} placeholder='Search products by name' onChange={(e) => this.handleChange(e, updateSearch)}></input>
                </form>
            )}
        </AmazingStoreContext.Consumer>
      </div>
    )
  }
};
