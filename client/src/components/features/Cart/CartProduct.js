import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Currency from "../../common/Currency/Currency";
import Image from "../../common/Image/Image";
import { Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartProduct.scss';

class CartProduct extends React.Component {
    render() {

        const { id, image, title, price, content, quantity, onRemoveProduct, onQtyChange } = this.props;

        return (
            <div className={'cart-container'}>
                <Row>
                    <Col sm={'3'} md={'2'} >
                        <Image image={ image }/>
                    </Col>
                    <Col  sm={'3'} md={'4'}>
                        <h4>
                            <strong>{ title }</strong>
                        </h4>
                        <h4>
                            <small>{ content }</small>
                        </h4>
                    </Col>
                    <Col  sm={'6'}>
                        <Row>
                            <Col  sm={'3'}>
                                <h5 className={'amount'}>
                                    <strong>
                                        <Currency value={ price }/>
                                        <span className={'multiply'}>x</span>
                                    </strong>
                                </h5>
                            </Col>
                            <Col  sm={'6'}>
                                <InputGroup>
                                    <Input
                                        onClick={() => onQtyChange(id, quantity + 1)}
                                        type={'button'}
                                        value={'+'}
                                    />
                                    <Input
                                        value={ quantity }
                                        onChange={(event) => {
                                            const value = parseInt(event.target.value);

                                            if (!isNaN(value)) {
                                                onQtyChange(id, value)
                                            } else {
                                                onQtyChange(id, 0)
                                            }
                                        }}
                                        min={0}
                                        max={100}
                                        type={'number'}
                                        step={'1'}
                                        className={'quantity'}
                                    />
                                    <Input
                                        onClick={() => onQtyChange(id, quantity - 1)}
                                        type={'button'}
                                        value={'-'}
                                    />
                                </InputGroup>
                            </Col>
                            <Col  sm={'3'}>
                                <Button
                                    onClick={() => onRemoveProduct(id)}
                                    color={'warning'}
                                >
                                    <FontAwesomeIcon icon={ faTrash } />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

CartProduct.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.number,
    content: PropTypes.string,
    quantity: PropTypes.number,
    stockCount: PropTypes.number,
    onQtyChange: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
};

export default withRouter(props => <CartProduct {...props}/>);
