import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from "reactstrap";
import './ProductSummary.scss';

const ProductsSummary = ({ id, title, price, feature }) => (
    <Col xs={6} key={id} className={'product-container'}>
        <Link to={`/${id}`}>
            <div className={'product-box'}>
                <img src={'https://via.placeholder.com/150'} alt={'photo'}/>
                <div className={'label-product'}>
                    <p>{ feature }</p>
                    <p>{ title }</p>
                    <p>{ price }</p>
                </div>
            </div>
        </Link>
    </Col>
);

ProductsSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    feature: PropTypes.string,
};

export default ProductsSummary;
