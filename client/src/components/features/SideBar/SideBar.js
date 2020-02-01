import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from "reactstrap";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleSort = (sortBy, direction) => {
        this.props.loadProductsByPageRequest(this.props.initialPage, sortBy, direction);
    };

    handleFind = () => {
        this.props.loadProductsByPageRequest(
            this.props.initialPage,
            this.props.sortBy,
            this.props.direction,
            this.state.search
        );
    };

    handleSearchChange = (event) => {
        this.setState({search: event.target.value})
    };

    render() {
        return (
            <div>
                <h3>Sort:</h3>
                <ListGroup>
                    <button onClick={() => this.handleSort('title', 'desc')}>By title desc</button>
                    <button onClick={() => this.handleSort('title', 'asc')}>By title asc</button>
                    <button onClick={() => this.handleSort('price', 'desc')}>By price desc</button>
                    <button onClick={() => this.handleSort('price', 'asc')}>By price asc</button>
                </ListGroup>
                <h3>Find:</h3>
                <ListGroup>
                    <input
                        type={'text'}
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                    <button onClick={() => this.handleFind('title', 'desc')}>Search</button>
                </ListGroup>
            </div>
        );
    }

}

SideBar.propTypes = {
    loadProductsByPageRequest: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
};

SideBar.defaultProps = {
    initialPage: 1,
};

export default SideBar;
