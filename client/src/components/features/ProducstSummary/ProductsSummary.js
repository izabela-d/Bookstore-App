import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from "reactstrap";
import './ProductSummary.scss';
import Currency from "../../common/Currency/Currency";

const ProductsSummary = ({ id, title, oldPrice, price, feature }) => (
    <Col xs={6} key={id} className={'product-container'}>
        <Link to={`/${id}`}>
            <div className={'product-box'}>
                <img src={'https://via.placeholder.com/150'} alt={'photo'}/>
                <div className={'label-product'}>
                    <p>{ feature }</p>
                    <p>{ title }</p>
                    <p>
                        {oldPrice &&
                        <span className={'old-price'}>
                            <Currency value={oldPrice}/>
                        </span>
                        }
                        <Currency value={price}/>
                    </p>
                </div>
            </div>
        </Link>
    </Col>
);

ProductsSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    feature: PropTypes.string,
};

export default ProductsSummary;
