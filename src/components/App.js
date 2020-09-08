import React from "react";
import Header from "./header/Header";
import ProfileBox from "./profile-box/ProfileBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <ProfileBox />
      </Container>
    </React.Fragment>
  );
}

export default App;