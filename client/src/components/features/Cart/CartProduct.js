import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';

class CartProduct extends React.Component {

    render() {
        const { id, title, price, content, quantity, onRemoveProduct} = this.props;

        return (
            <div  className="row">
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img className="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80" />
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                    <h4 className="product-name"><strong>{title}</strong></h4>
                    <h4>
                        <small>{content}</small>
                    </h4>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                    <div className="col-3 col-sm-3 col-md-6 text-md-right">
                        <h6><strong>{price} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                            <input type="button" value="+" className="plus" onChange={() => 111} />
                            <input type="number" step="1" max="99" min="1" value={quantity} onChange={() => 111} title="Qty" className="qty" size="4" />
                            <input type="button" value="-" className="minus" onChange={() => 111} />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button onClick={() => onRemoveProduct(id)} type="button" className="btn btn-outline-danger btn-xs">
                            <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

CartProduct.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.number,
    content: PropTypes.string,
    quantity: PropTypes.number,
    stockCount: PropTypes.number,
    onQtyChange: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
};

export default withRouter(props => <CartProduct {...props}/>);
