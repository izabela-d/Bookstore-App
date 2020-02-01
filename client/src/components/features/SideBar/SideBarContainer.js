import { connect } from 'react-redux';
import {loadProductsByPageRequest, getProducts, getSortBy, getDirection, getPages} from "../../../redux/productsRedux";
import SideBar from './SideBar';

const mapStateToProps = state => ({
    products: getProducts(state),
    sortBy: getSortBy(state),
    direction: getDirection(state),
});

const mapDispatchToProps = dispatch => ({
    sort: (page, productsPerPage, key, direction) => dispatch(loadProductsByPageRequest(page, productsPerPage, key, direction)),
});

export default connect( mapStateToProps, mapDispatchToProps)(SideBar);
