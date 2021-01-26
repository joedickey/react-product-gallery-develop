import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './Categories.css';

export default class Categories extends Component {
    static contextType = AmazingStoreContext;

    handleClick = (e, callback) => {
        const id = e.target.id.slice(4) // to prevent duplicate IDs
        callback(id)
    }

  render() {
      const currCategoryId = this.context.currCategoryId
      const categories = this.context.categories.map((category, idx) => 
        <p 
            className={`${currCategoryId === category.id ? 'selected' : 'Categories_option'}`} 
            key={`cat_${idx}`} id={`cat_${category.id}`} 
            onClick={(e) => this.handleClick(e, this.context.updateCurrCategory)}>
            {category.name}
        </p>)

    return (
      <div className='Categories'>
        <h4>ALL CATEGORIES</h4>
        <div className='Categories_select'>
            {categories}
        </div>
      </div>
    )
  }
};
