import React from 'react';
import {PropTypes} from 'prop-types';
import Pagination from '../../common/Pagination/Pagination';
import ProductsList from "../ProductsList/ProductsList";

class Products extends React.Component {

    /*state = {
        presentPage: this.props.initialPage || 1
    };

    componentDidMount() {
        const { loadProductsByPage } = this.props;

        loadProductsByPage(this.props.initialPage, this.props.productsPerPage);
    }

    loadProductPage = (page) => {
        const { loadProductsByPage } = this.props;
        this.setState({presentPage: page});

        loadProductsByPage(page, this.props.productsPerPage);
    };*/

    componentDidMount() {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        /*const { products, pages, pagination } = this.props;
        const { loadProductPage } = this;
        const { presentPage } = this.state;*/

        const { products } = this.props;

        return (
            /*<div>
                <ProductsList products={products} />
                {pagination &&
                <Pagination
                    presentPage={presentPage}
                    pages={pages}
                    onPageChange={loadProductPage}
                />
                }
            </div>*/
            <div>
                <ProductsList products={products} />
            </div>
        );
    }
}

Products.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ),
    productsPerPage: PropTypes.number,
    initialPage: PropTypes.number,
    //loadProductsByPage: PropTypes.func.isRequired,
    pagination: PropTypes.bool,
    loadProducts: PropTypes.func.isRequired,
};

Products.defaultProps = {
    initialPage: 1,
    productPerPage: 10,
    pagination: true,
};

export default Products;
