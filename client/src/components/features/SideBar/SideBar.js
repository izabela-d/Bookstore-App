import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button, ButtonToggle, Input } from 'reactstrap';

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
                    <ButtonToggle
                        color={'success'}
                        onClick={() => this.handleSort('title', 'desc')}
                    >
                        By title desc
                    </ButtonToggle>
                    <ButtonToggle
                        color={'success'}
                        onClick={() => this.handleSort('title', 'asc')}
                    >
                        By title asc
                    </ButtonToggle>
                    <ButtonToggle
                        color={'success'}
                        onClick={() => this.handleSort('price', 'desc')}
                    >
                        By price desc
                    </ButtonToggle>
                    <ButtonToggle
                        color={'success'}
                        onClick={() => this.handleSort('price', 'asc')}
                    >
                        By price asc
                    </ButtonToggle>
                </ListGroup>
                <h5>Find:</h5>
                <ListGroup>
                    <Input
                        type={'text'}
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                    <Button
                        color={'warning'}
                        onClick={() => this.handleFind('title', 'desc')}
                    >
                        Search
                    </Button>
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
