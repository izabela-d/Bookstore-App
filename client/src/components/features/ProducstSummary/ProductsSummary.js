import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Button } from "reactstrap";

const ProductsSummary = ({ id, title, content, price }) => (
    <Col xs={6} key={id}>
        <div className={'product-box'}>
            <img src={'https://via.placeholder.com/150'} alt={'photo'}/>
            <div className={'label-product'}>
                <p>{ title }</p>
                <p>{ price }</p>
            </div>
            <Button variant="primary">
                <Link to={`/${id}`}>Read more</Link>
            </Button>
        </div>
    </Col>
);

ProductsSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};

export default ProductsSummary;
