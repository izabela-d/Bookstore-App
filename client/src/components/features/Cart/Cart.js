import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import CartProduct from './CartProduct';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            couponCode: ''
        }
    }

    handleClick = () => {
        this.props.checkout (this.props.cartProducts, this.state.couponCode);
    };

    handleCouponCode = (event) => {
        this.setState({couponCode: event.target.value})
    };

    render() {
        const {cartProducts, totalPrice, changeQty, removeCartProduct } = this.props;

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
                        onQtyChange={(id, quantity) => changeQty(id, quantity)}
                        onRemoveProduct={(id) => removeCartProduct(id)}
                    />
                })}
                <div className="card-footer">
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="row">
                            <div className="">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="cupone code"
                                    onChange={this.handleCouponCode}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pull-right">
                        <Link to="/summary"
                              className="btn btn-success pull-right"
                              onClick = {() => {this.handleClick ()}}
                        >
                            Checkout
                        </Link>
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
