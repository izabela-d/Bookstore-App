import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from "reactstrap";
import Button from "../../common/Button/Button";

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
                <h5>Sort:</h5>
                <ListGroup>
                    <Button variant={'primary'} onClick={() => this.handleSort('title', 'desc')}>By title desc</Button>
                    <Button variant={'primary'} onClick={() => this.handleSort('title', 'asc')}>By title asc</Button>
                    <Button variant={'primary'} onClick={() => this.handleSort('price', 'desc')}>By price desc</Button>
                    <Button variant={'primary'} onClick={() => this.handleSort('price', 'asc')}>By price asc</Button>
                </ListGroup>
                <h5>Find:</h5>
                <ListGroup>
                    <input
                        type={'text'}
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                    <Button variant={'primary'} onClick={() => this.handleFind('title', 'desc')}>Search</Button>
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
