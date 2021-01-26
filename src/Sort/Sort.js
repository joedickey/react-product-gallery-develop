import React, { Component } from 'react';
import AmazingStoreContext from '../AmazingStoreContext';
import './Sort.css';

export default class Sort extends Component {
    static contextType = AmazingStoreContext;

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

  render() {
    return (
      <div className='Sort'>
        <h4>SORT</h4>
        <AmazingStoreContext.Consumer>
            {({updateSort}) => (
                <select name='Sort_select' id='Sort_select' value={this.context.sort} onChange={(e) => this.handleChange(e, updateSort)}>
                    <option value='default'>Default</option>
                    <option value='low to high'>Price: Low to High</option>
                    <option value='high to low'>Price: High to Low</option>
                </select>
            )}
        </AmazingStoreContext.Consumer>
      </div>
    )
  }
};
