import React, { PureComponent } from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import'./style/common.less'
class admin extends PureComponent {
  render() {
    return (
      //updagas 
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content">sdf</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default admin;
