import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";

class SingleProduct extends React.Component {
    componentDidMount() {
        const { loadSingleProduct, match} = this.props;

        loadSingleProduct(match.params.id);
    }

    render() {
        const { singleProduct } = this.props;

        return (
            <div>
                Single Product
                <p>{singleProduct.title}</p>
            </div>
        );
    }
}

SingleProduct.propTypes = {
    singleProduct: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        price: PropTypes.string,
    }),
    loadSingleProduct: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);
