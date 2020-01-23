import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CartProduct from './CartProduct';

class Cart extends React.Component {

    render() {
        const {cartProducts, totalPrice, onQtyChange, removeCartProduct} = this.props;

        return (
            <div className="card-body">
                <h1>Cart</h1>
                {cartProducts.map((product, index) => {
                    return <CartProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        content={product.content}
                        quantity={product.quantity}
                        stockCount={product.stockCount}
                        onQtyChange={(e, id) => onQtyChange(e, id)}
                        onRemoveProduct={(id) => removeCartProduct(id)}
                    />
                })}
                <div className="card-footer">
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="cupone code"/>
                            </div>
                            <div className="col-6">
                                <input type="submit" className="btn btn-default" value="Use cupone"/>
                            </div>
                        </div>
                    </div>
                    <div className="pull-right">
                        <a href="" className="btn btn-success pull-right">Checkout</a>
                        <div className="pull-right" >
                            Total price: <b>{totalPrice}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    Cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number,
        })
    )
};

export default withRouter(props => <Cart {...props}/>);
