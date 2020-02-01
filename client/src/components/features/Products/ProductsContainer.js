import { connect } from 'react-redux';
import {
    getProducts,
    getPages,
    loadProductsByPageRequest,
    getSortBy,
    getDirection,
    getSearch
} from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
    pages: getPages(state),
    sortBy: getSortBy(state),
    direction: getDirection(state),
    search: getSearch(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductsByPage: (page, sortBy, direction, search) => dispatch(loadProductsByPageRequest(page, sortBy, direction, search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
