import { connect } from 'react-redux';
import { getCartProducts, getTotalPrice, removeCartProduct } from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
    cartProducts: getCartProducts(state),
    totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
    removeCartProduct: (id) => dispatch(removeCartProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
