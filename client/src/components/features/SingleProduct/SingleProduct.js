import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import { Button, Alert } from 'reactstrap';
import Currency from "../../common/Currency/Currency";
import Image from "../../common/Image/Image";
import './SingleProduct.scss';
import Spinner from '../../common/Spinner/Spinner';

class SingleProduct extends React.Component {

    handleClick = (id) => {
        this.props.addProductToCart (id);
        this.props.history.push("/cart");
    };

    componentDidMount() {
        const { loadSingleProduct, match} = this.props;

        loadSingleProduct(match.params.id);
    }

    render() {
        const { singleProduct } = this.props;

        if (!singleProduct && this.props.isError) {
            return (
                <div>
                    <Alert color={'error'}>error</Alert>
                </div>
            )
        }

        if (!singleProduct && this.props.isLoading) {
            return (
                <div>
                    <Spinner />
                </div>
            )
        }

        if (singleProduct) {
            return (
                <div className={'single-product-container'}>
                    <Image image={singleProduct.image}/>
                    <br/>
                    {singleProduct.feature &&
                    <Button
                        outline color={'info'}
                    >
                        {singleProduct.feature}
                    </Button>
                    }
                    <p className={'title'}>{singleProduct.title}</p>
                    {singleProduct.oldPrice &&
                    <span className={'old-price'}>
                    <Currency value={singleProduct.oldPrice}/>
                </span>
                    }
                    <p className={'price'}>
                        <Currency value={singleProduct.price}/>
                    </p>
                    <p>{singleProduct.content}</p>
                    <Button
                        onClick={() => {
                            this.handleClick(singleProduct.id)
                        }}
                        color={'success'}
                    >
                        Add product
                    </Button>
                </div>
            )
        }

        return (
            <div>
                <Alert color={'info'}>No products!</Alert>
            </div>
        )
    }
}

SingleProduct.propTypes = {
    singleProduct: PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        oldPrice: PropTypes.string,
        price: PropTypes.string,
        feature: PropTypes.string,
    }),
    loadSingleProduct: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);
