import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Copyright John Rho 2022. Site built with love using React JS.
                    </Col>
                    {/*<Col className="p-0 d-flex justify-content-end" md={3}>
                        Copyright John Rho 2021.
                    </Col>*/}
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;