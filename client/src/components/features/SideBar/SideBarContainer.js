import { connect } from 'react-redux';
import {loadProductsByPageRequest, getProducts, getSortBy, getDirection} from "../../../redux/productsRedux";
import SideBar from './SideBar';

const mapStateToProps = state => ({
    products: getProducts(state),
    sortBy: getSortBy(state),
    direction: getDirection(state),
});

const mapDispatchToProps = dispatch => ({
    sort: (page, sortBy, direction) => dispatch(loadProductsByPageRequest(page, sortBy, direction)),
});

export default connect( mapStateToProps, mapDispatchToProps)(SideBar);
