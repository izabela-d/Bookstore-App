import React from 'react';
import {PropTypes} from 'prop-types';
import Pagination from '../../common/Pagination/Pagination';
import ProductsList from "../ProductsList/ProductsList";

class Products extends React.Component {

    state = {
        presentPage: this.props.initialPage || 1
    };

    componentDidMount() {
        const { loadProductsByPage } = this.props;

        loadProductsByPage(this.props.initialPage);
    }

    loadProductPage = (page) => {
        const { loadProductsByPage, sortBy, direction } = this.props;
        this.setState({presentPage: page});

        loadProductsByPage(page, sortBy, direction);
    };

    render() {
        const { products, pages, pagination } = this.props;
        const { loadProductPage } = this;
        const { presentPage } = this.state;

        return (
            <div>
                <ProductsList products={products} />

                {pagination &&
                <Pagination
                    presentPage={presentPage}
                    pages={pages}
                    onPageChange={loadProductPage}
                />
                }
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
            oldPrice: PropTypes.string,
            price: PropTypes.string.isRequired,
            feature: PropTypes.string,
        })
    ),
    initialPage: PropTypes.number,
    loadProductsByPage: PropTypes.func.isRequired,
    pagination: PropTypes.bool,
    sortBy: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
};

Products.defaultProps = {
    initialPage: 1,
    pagination: true,
};

export default Products;
