import { connect } from 'react-redux';
import {
    getSingleProduct,
    loadSingleProductRequest,
    addProductToCart,
    isLoading, isError
} from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
    singleProduct: getSingleProduct(state),
    isLoading: isLoading(state),
    isError: isError(state),
});

const mapDispatchToProps = dispatch => ({
    loadSingleProduct: (id) => dispatch(loadSingleProductRequest(id)),
    addProductToCart: (id) => dispatch(addProductToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
