import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import './ProductSummary.scss';
import Currency from '../../common/Currency/Currency';
import Image from '../../common/Image/Image';

const ProductsSummary = ({ id, title, author, oldPrice, price, feature, image }) => (

    <Col xs={12} md={6} lg={4} xl={3} key={id} className={'product-container'}>
        <Link to={`/${id}`}>
            <div className={'product-box'}>
                <Image image={image}/>
                <div className={'label-product'}>
                    <br />

                    {feature === 'promotion' &&
                    <Button
                        outline color={'danger'}
                    >
                        {feature}
                    </Button>
                    }
                    {feature === 'best' &&
                    <Button
                        outline color={'warning'}
                    >
                        {feature}
                    </Button>
                    }
                    {feature === 'new' &&
                    <Button
                        outline color={'info'}
                    >
                        {feature}
                    </Button>
                    }

                    <p>Title: <span className={'title'}>{ title }</span></p>
                    <p>Author: { author }</p>
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    feature: PropTypes.string
};

export default ProductsSummary;
