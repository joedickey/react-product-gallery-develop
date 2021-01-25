import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './ProductList.css';

export default class ProductList extends Component {
    static contextType = AmazingStoreContext;

  render() {
        const categoryIndex = this.context.categories.findIndex(category => category.id === this.context.currCategoryId)
        const categoryTitle = this.context.categories[categoryIndex].name
        const items = this.context.displayProducts.map((product, idx) => {
            return (
                <div className='ProductList_item' key={`item_${idx}`}>
                    <img src={product.images.medium} alt={product.name}></img>
                    <p className='Item_name'>{product.name}</p>
                    <p className='Item_price'>${product.price}</p>
                </div>
            )
        })
    return (
      <div className='ProductList'>
        <h2 className='ProductList_title'>{categoryTitle}</h2>
        <div className='ProductList_display'>
            {items}
        </div>
      </div>
    )
  }
};
