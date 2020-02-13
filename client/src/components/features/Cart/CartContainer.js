import { connect } from 'react-redux';
import {
    getCartProducts,
    getTotalPrice,
    removeCartProduct,
    changeQty,
    checkoutRequest,
    isLoading, isError,
} from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
    cartProducts: getCartProducts(state),
    totalPrice: getTotalPrice(state),
    isLoading: isLoading(state),
    isError: isError(state),
});

const mapDispatchToProps = dispatch => ({
    removeCartProduct: (id) => dispatch(removeCartProduct(id)),
    changeQty: (id, quantity) => dispatch(changeQty(id, quantity)),
    checkout: (cartProducts, couponCode) => dispatch(checkoutRequest(cartProducts,couponCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
