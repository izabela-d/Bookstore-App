import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Currency from "../../common/Currency/Currency";

class Summary extends React.Component {
    render() {
        const { summary } = this.props;

        return (
            <div className="card-summary">
                <h1>Summary</h1>

                <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                    {summary.items.map( item => {
                       return (
                           <tr key={item.id}>
                               <td>
                                   {item.title}
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
                </table>
                <div>
                    Order total: {summary.sum}
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
