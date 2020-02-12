import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Products from "../../features/Products/ProductsContainer";
import SideBar from '../../features/SideBar/SideBarContainer'

const HomePage = () => (
    <Container>
        <Row>
            <Col xs={4} md={3}>
                <SideBar />
            </Col>
            <Col xs={8} md={9}>
                <Products/>
            </Col>
        </Row>
    </Container>
);

export default HomePage;
