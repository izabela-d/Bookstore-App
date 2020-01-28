import { connect } from 'react-redux';
import { getSingleProduct, loadSingleProductRequest,addProductToCart } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
    singleProduct: getSingleProduct(state),
});

const mapDispatchToProps = dispatch => ({
    loadSingleProduct: (id) => dispatch(loadSingleProductRequest(id)),
    addProductToCart: (id) => dispatch(addProductToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
