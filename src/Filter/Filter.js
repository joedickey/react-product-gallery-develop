import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './Filter.css';

export default class Filter extends Component {
    static contextType = AmazingStoreContext;

    handleSubmit = (e) => {
        e.preventDefault();

    }

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

  render() {
    return (
      <div className='Filter'>
        <h4>FILTER BY PRICE</h4>
        <AmazingStoreContext.Consumer>
            {({updatePriceMin, updatePriceMax}) => (
                <form className='Filter_form' onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor='price_min'></label>
                    <input className='Filter_input' type='number' id='price_min' name='price_min' value={this.context.priceMin} placeholder='$ Min' min={0} step='.01' onChange={(e) => this.handleChange(e, updatePriceMin)}></input>
                    <label htmlFor='price_max'></label>
                    <input className='Filter_input' type='number' id='price_max' name='price_max' value={this.context.priceMax} placeholder='$ Max' min={0} step='.01' onChange={(e) => this.handleChange(e, updatePriceMax)}></input>
                    <button type='submit'>Go</button>
                </form>
            )}
        </AmazingStoreContext.Consumer>
      </div>
    )
  }
};
