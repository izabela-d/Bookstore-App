import { connect } from 'react-redux';
import {loadProductsByPageRequest, getProducts, getSortBy, getDirection, getSearch} from "../../../redux/productsRedux";
import SideBar from './SideBar';

const mapStateToProps = state => ({
    products: getProducts(state),
    sortBy: getSortBy(state),
    direction: getDirection(state),
    search: getSearch(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductsByPageRequest: (page, sortBy, direction, search) => dispatch(loadProductsByPageRequest(page, sortBy, direction, search)),
});

export default connect( mapStateToProps, mapDispatchToProps)(SideBar);
