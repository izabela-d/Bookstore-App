import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from "reactstrap";

const SideBar = (props) =>  {

    const handleOnClick = (key, direction) => {
        props.sort(1, 10, key, direction);
    };

    return (
        <div>
            <h3>Sort:</h3>
            <ListGroup>
                <button onClick={() => handleOnClick('title', 'desc')}>By title desc</button>
                <button onClick={() => handleOnClick('title', 'asc')}>By title asc</button>
                <button onClick={() => handleOnClick('price', 'desc')}>By price desc</button>
                <button onClick={() => handleOnClick('price', 'asc')}>By price asc</button>
            </ListGroup>
        </div>
    );


};

SideBar.propTypes = {
    sort: PropTypes.func.isRequired,
    productsPerPage: PropTypes.number,
};


SideBar.defaultProps = {
    initialPage: 1,
    productsPerPage: 10,
};


export default SideBar;
