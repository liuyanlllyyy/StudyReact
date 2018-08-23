import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'antd';
import Header from'./components/Header';
import Footer from'./components/Footer';

class admin extends PureComponent {
    render() {
        return (
           <Row>
               <Col span="3">
               left
               </Col>
               <Col span="21">  
                 <Header></Header>
                 <span>sdf</span>
                 <Footer></Footer>
               </Col>
           </Row>
        );
    }
}

admin.propTypes = {

};

export default admin;