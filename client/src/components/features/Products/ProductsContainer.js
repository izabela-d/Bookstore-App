import { connect } from 'react-redux';
import { getProducts, loadProductsByPageRequest, loadProductsRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
    //loadProductsByPage: (page, postsPerPage) => dispatch(loadProductsByPageRequest(page, postsPerPage)),
    loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
