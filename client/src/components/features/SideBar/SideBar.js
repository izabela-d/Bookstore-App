import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <h3>Sort:</h3>
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        );
    }

}

export default SideBar;
