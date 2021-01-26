import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './Filter.css';

export default class Filter extends Component {
    static contextType = AmazingStoreContext;

    handleSubmit = (e, callback) => {
        e.preventDefault();
        const min = e.target.price_min.value;
        const max = e.target.price_max.value;

        callback(min, max)
    }

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

  render() {
    return (
      <div className='Filter'>
        <h4>FILTER BY PRICE</h4>
        <AmazingStoreContext.Consumer>
            {({updatePriceMin, updatePriceMax, filterByPrice}) => (
                <form className='Filter_form' onSubmit={(e) => this.handleSubmit(e, filterByPrice)}>
                    <label htmlFor='price_min'></label>
                    <input 
                        className='Filter_input' 
                        type='number' 
                        id='price_min' 
                        name='price_min' 
                        value={this.context.priceMin > 0 ? this.context.priceMin : ''} // clears value if not greater than 0
                        placeholder='$ Min' 
                        min={0} step='.01' 
                        onChange={(e) => this.handleChange(e, updatePriceMin)}></input>
                    <label htmlFor='price_max'></label>
                    <input 
                        className='Filter_input' 
                        type='number' 
                        id='price_max' 
                        name='price_max' 
                        value={this.context.priceMax > 0 ? this.context.priceMax : ''} // clears value if not greater than 0 
                        placeholder='$ Max' 
                        min={0} 
                        step='.01' 
                        onChange={(e) => this.handleChange(e, updatePriceMax)}></input>
                    <button type='submit'>Go</button>
                </form>
            )}
        </AmazingStoreContext.Consumer>
      </div>
    )
  }
};
