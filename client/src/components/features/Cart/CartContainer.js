import { connect } from 'react-redux';
import { getCartProducts, getTotalPrice, removeCartProduct, changeQty, checkoutRequest} from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
    cartProducts: getCartProducts(state),
    totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
    removeCartProduct: (id) => dispatch(removeCartProduct(id)),
    changeQty: (id, quantity) => dispatch(changeQty(id, quantity)),
    checkout: cartProducts => dispatch(checkoutRequest(cartProducts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
