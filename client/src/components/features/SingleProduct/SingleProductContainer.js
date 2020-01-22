import { connect } from 'react-redux';
import { getSingleProduct, loadSingleProductRequest } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
    singleProduct: getSingleProduct(state),
});

const mapDispatchToProps = dispatch => ({
    loadSingleProduct: (id) => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
