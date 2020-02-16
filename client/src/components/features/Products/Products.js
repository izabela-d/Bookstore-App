import React from 'react';
import { PropTypes } from 'prop-types';
import { Alert } from 'reactstrap';
import Pagination from '../../common/Pagination/Pagination';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';

class Products extends React.Component {
    state = {
        presentPage: this.props.initialPage || 1
    };

    componentDidMount () {
        const { loadProductsByPage } = this.props;

        loadProductsByPage(this.props.initialPage);
    }

    loadProductPage = (page) => {
        const { loadProductsByPage, sortBy, direction, search } = this.props;
        this.setState({ presentPage: page });

        loadProductsByPage(page, sortBy, direction, search);
    };

    render () {
        const { products, pages, pagination } = this.props;
        const { loadProductPage } = this;
        const { presentPage } = this.state;

        if (this.props.isError) {
            return (
                <div>
                    <Alert color={'error'}>error</Alert>
                </div>
            );
        }

        if (this.props.isLoading) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        }

        if (products.length > 0) {
            return (
                <div>
                    <ProductsList products={products}/>

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

        return (
            <div>
                <Alert color={'info'}>No products!</Alert>
            </div>
        );
    }
}

Products.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            oldPrice: PropTypes.string,
            price: PropTypes.string.isRequired,
            feature: PropTypes.string
        })
    ),
    initialPage: PropTypes.number,
    loadProductsByPage: PropTypes.func.isRequired,
    pagination: PropTypes.bool,
    sortBy: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
};

Products.defaultProps = {
    initialPage: 1,
    pagination: true
};

export default Products;
