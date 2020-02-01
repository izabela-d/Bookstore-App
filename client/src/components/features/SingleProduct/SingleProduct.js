import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import Currency from "../../common/Currency/Currency";

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

        return (
            <div>
                Single Product
                <div>
                    <p>{singleProduct.feature}</p>
                    <p>{singleProduct.title}</p>
                    {singleProduct.oldPrice &&
                    <span className={'old-price'}>
                            <Currency value={singleProduct.oldPrice}/>
                        </span>
                    }
                    <p>
                        <Currency value={singleProduct.price}/>
                    </p>
                    <p>{singleProduct.content}</p>
                    <button
                        onClick = {() => {this.handleClick (singleProduct.id)}}
                        type="button"
                        className="btn btn-outline-danger btn-xs">
                        Add product
                    </button>
                </div>
            </div>
        );
    }
}

SingleProduct.propTypes = {
    singleProduct: PropTypes.shape({
        id: PropTypes.string,
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
