import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Alert } from 'reactstrap';
import Currency from "../../common/Currency/Currency";
import PageTitle from "../../common/PageTitle/PageTitle";
import './Summary.scss';
import Spinner from '../../common/Spinner/Spinner';

class Summary extends React.Component {
    render() {
        const { summary } = this.props;

        if (this.props.isError) {
            return (
                <div>
                    <Alert color={'error'}>error</Alert>
                </div>
            )
        }

        if (this.props.isLoading) {
            return (
                <div>
                    <Spinner />
                </div>
            )
        }

        return (
            <div>
                <PageTitle>Summary</PageTitle>

                <Table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {summary.items.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.author}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    <Currency value={item.price}/>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                <div className={'order-total'}>
                    Order total: <Currency value={summary.sum}/>
                </div>
            </div>
        )

    }
}

Summary.defaultProps = {
    summary: {items: []}
};

Summary.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number,
        })
    )
};

export default withRouter(props => <Summary {...props}/>);
