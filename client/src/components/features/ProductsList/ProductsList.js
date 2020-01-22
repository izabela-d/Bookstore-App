import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsSummary from '../ProducstSummary/ProductsSummary';
import './ProductsList.scss';

const ProductsList = (props) => {
    return (
        <div>
            <section className="products-list">
                {props.products.map(product => <ProductsSummary key={product.id} {...product} />)}
            </section>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};

export default ProductsList;
