import { connect } from 'react-redux';
import { getProducts, loadProductsByPageRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductsByPage: (page, postsPerPage) => dispatch(loadProductsByPageRequest(page, postsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
