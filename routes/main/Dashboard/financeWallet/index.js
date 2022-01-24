import React from "react";
import {Col, Row} from "antd";

import Selection from "../../../../app/components/dashboard/FinanceWallet/Selection";
import Tabnav from "../../../../app/components/dashboard/FinanceWallet/Tabnav"
import Orders from "../../../../app/components/dashboard/FinanceWallet/Orders";

const Crypto = () => {
  return (
    <>
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Selection/>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Tabnav/>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Orders/>
        </Col>
      </Row>
    </>
  );
};


export default Crypto;
