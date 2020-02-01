import { connect } from 'react-redux';
import {getProducts, getPages, loadProductsByPageRequest, getSortBy, getDirection} from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
    pages: getPages(state),
    sortBy: getSortBy(state),
    direction: getDirection(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductsByPage: (page, sortBy, direction) => dispatch(loadProductsByPageRequest(page, sortBy, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
