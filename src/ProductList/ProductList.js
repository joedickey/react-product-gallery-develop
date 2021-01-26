import React, { Component } from 'react';
import Modal from 'react-modal';
import AmazingStoreContext from '../AmazingStoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ProductList.css';

export default class ProductList extends Component {
    static contextType = AmazingStoreContext;

    state = {
        modalIsOpen: false
    }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    
    handleClick = (e, callback) => {
        callback(e.target.id);
        if(!this.state.modalIsOpen) { // do not close modal when clicking related product
            this.toggleModal();
        }
    }

    handleAddClick = (e, callback) => {
        e.stopPropagation();
        callback(e.target.id)
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

  render() {
        const modalStyles = {
            content : {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 4px 14px rgba(123,123,123,0.3)',
            },
        };

        Modal.defaultStyles.content.padding = '0px';
        Modal.defaultStyles.content.border = 'none';

        const categoryIndex = this.context.categories.findIndex(category => category.id === this.context.currCategoryId)
        const categoryTitle = this.context.categories[categoryIndex].name
        const items = this.context.displayProducts.map((product, idx) => {
            return (
                <AmazingStoreContext.Consumer key={`item_${idx}`}>
                    {({updateCurrProduct, addToCart}) => (
                        <div className='ProductList_item' id={product.id} onClick={(e) => this.handleClick(e, updateCurrProduct)}>
                            <img src={product.images.medium} alt={product.name} id={product.id}></img>
                            <p className='Item_name' id={product.id}>{product.name}</p>
                            <p className='Item_price' id={product.id}>${product.price}</p>
                            <button type='button' id={product.id} onClick={(e)=> this.handleAddClick(e, addToCart)}>Add To Cart</button>
                        </div>
                    )}
                </AmazingStoreContext.Consumer>
            )
        })

        const relatedProducts = this.context.relatedProducts.map((product, idx) => {
            return (
                <AmazingStoreContext.Consumer key={`rel_${idx}${product.id}`}>
                    {({updateCurrProduct}) => (
                        <div className='RelatedProduct' id={product.id} onClick={(e) => this.handleClick(e, updateCurrProduct)}>
                            <img className='RelatedProduct_image' src={product.images.medium} alt={product.name} id={product.id}></img>
                            <p className='RelatedProduct_name' id={product.id}>{product.name}</p>
                        </div>
                    )}
                </AmazingStoreContext.Consumer>
            )
        })
    return (
      <div className='ProductList'>
        <h2 className='ProductList_title'>{categoryTitle}</h2>
        <div className='ProductList_display'>
            {items}
        </div>

        <Modal 
            isOpen={this.state.modalIsOpen} 
            style={modalStyles} 
            onRequestClose={this.toggleModal}>
                <AmazingStoreContext.Consumer>
                    {({currProduct, addToCart}) => (
                        <div className='ItemDetail' >
                            <div className='ItemDetail_top'>
                                <FontAwesomeIcon className='ItemDetail_icon' icon={faTimes} size='2x' onClick={() => this.toggleModal()}/>
                            </div>
                            <div className='ItemDetail_bottom'>
                                <div className='ItemDetail_left'>
                                    <img src={currProduct.images.large} alt={currProduct.name}></img>
                                </div>
                                <div className='ItemDetail_right'>
                                    <h2 className='ItemDetail_name' >{currProduct.name}</h2>
                                    <h2 className='ItemDetail_price'>${currProduct.price}</h2>
                                    <p className='ItemDetail_desc'>{currProduct.description}</p>
                                    <button type='button' id={currProduct.id} onClick={(e)=> this.handleAddClick(e, addToCart)}>Add To Cart</button> 
                                    <div className='ItemDetail_related'>
                                        <h4 id='related_title'>Related Products:</h4>
                                        {relatedProducts.length === 0 ? 'No related products' : relatedProducts }
                                    </div>
                                </div>  
                            </div>
                        </div>
                    )}
                </AmazingStoreContext.Consumer>
        </Modal>
      </div>
    )
  }
};
