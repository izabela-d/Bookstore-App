import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import Currency from "../../common/Currency/Currency";
import PageTitle from "../../common/PageTitle/PageTitle";
import './Summary.scss';

class Summary extends React.Component {
    render() {
        const { summary } = this.props;

        return (
            <div>
                <PageTitle>Summary</PageTitle>

                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {summary.items.map( item => {
                       return (
                           <tr key={ item.id }>
                               <td>
                                   { item.title }
                               </td>
                               <td>
                                   { item.quantity }
                               </td>
                               <td>
                                   <Currency value={ item.price } />
                               </td>
                           </tr>
                       )
                    })}
                    </tbody>
                </Table>
                <div className={'order-total'}>
                    Order total: { summary.sum }
                </div>
            </div>
        );
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
            content: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number,
        })
    )
};

export default withRouter(props => <Summary {...props}/>);
