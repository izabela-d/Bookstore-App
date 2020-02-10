import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import PageTitle from "../../common/PageTitle/PageTitle";
import { Row, Col, Input, Button } from 'reactstrap';
import './Cart.scss';
import Currency from "../../common/Currency/Currency";

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
            <div>
                <PageTitle>Cart</PageTitle>
                <div>
                    {cartProducts.map((product) => {
                        return <CartProduct
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            content={product.content}
                            quantity={product.quantity}
                            stockCount={product.stockCount}
                            onQtyChange={(id, quantity) => changeQty(id, quantity)}
                            onRemoveProduct={(id) => removeCartProduct(id)}
                        />
                    })}
                </div>
                <div className={'checkout'}>
                    <div className={'panel-bar'} />
                        <Row>
                            <Col>
                                <Input
                                    type={'text'}
                                    placeholder={'cupone code'}
                                    onChange={ this.handleCouponCode }
                                />
                            </Col>
                            <Col>
                                <Link to="/summary"
                                      onClick = {() => {this.handleClick ()}}
                                >
                                    <Button
                                        color={'success'}
                                    >
                                        Checkout
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <div className="pull-right" >
                                    Total price: <b><Currency value={ totalPrice }/></b>
                                </div>
                            </Col>
                        </Row>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    Cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            image: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number,
        })
    )
};

export default withRouter(props => <Cart {...props}/>);
