import React, { useState } from "react";
import { Col, Row, Select, Menu, Button } from "antd";
import {
  SearchOutlined,
  SyncOutlined,
  MoreOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const Orders = () => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Row className="gx-mt-2">
      <Col xl={16} lg={14} md={12} sm={12} xs={12}>
        <h5>You have no open orders</h5>
      </Col>
      <Col xl={8} lg={10} md={12} sm={12} xs={12}>
        <Select style={{ width: 35, float: "right" }}></Select>
      </Col>

      <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-border-bottom">
        <div className="gx-flex-row">
          <div>
            <Select defaultValue="coin" style={{ width: "80px" }}>
              <Option value="coin">Coin</Option>
            </Select>
          </div>
          <Button className="gx-ml-3">
            <SearchOutlined />
          </Button>
          <div className="gx-ml-3">
            <Select defaultValue="coin" style={{ width: "140px" }}>
              <Option value="coin">Creation Date</Option>
            </Select>
          </div>
          <Button className="gx-ml-3">Units</Button>
          <div className="gx-flex-row gx-w-30">
          <div className="gx-ml-3">
            <Select defaultValue="coin" style={{ width: "90px" }}>
              <Option value="coin">Status</Option>
            </Select>
          </div>
          <Button className="gx-ml-3">
            <SyncOutlined />
          </Button>
          </div>
          <div>
            <Select
              defaultValue="coin"
              style={{ width: "90px", marginLeft: "110px", marginRight: "20px" }}
            >
              <Option value="coin">Profit</Option>
            </Select>
          </div>
          <Button className="gx-ml-5">Actions</Button>
        </div>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <div className="gx-flex-row gx-mt-4">
          <PlaySquareOutlined />
          <div className="gx-flex-col">
            <h5 className="gx-text-primary gx-ml-3">ETH_AION</h5>
            <h6 className="gx-text-primary gx-ml-3">Binance guides</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-3">09/28/2018</h5>
            <h6 className="gx-ml-3">3:56 PM</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-4">9.25</h5>
            <h6 className="gx-ml-4">0.01739</h6>
          </div>
          <div className="gx-mx-5">
            <h5>Buy order has been placed</h5>
            <h5>0.00188000</h5>
            <h5>bid 0.00187600 ask:</h5>
            <h5>0.00189100</h5>
          </div>
          <div className="gx-flex-row" style={{ marginLeft: "145px" }}>
            <Button
              className="gx-bg-aqua gx-text-white gx-ml-5 gx-px-2"
              style={{ width: "35px" }}
            >
              <SyncOutlined />
            </Button>
            <Button className="gx-ml-1 gx-px-2" style={{ width: "35px" }}>
              <MoreOutlined />
            </Button>
          </div>
        </div>
        <h6>You can place a note here</h6>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <div className="gx-flex-row gx-mt-4">
          <PlaySquareOutlined />
          <div className="gx-flex-col">
            <h5 className="gx-text-primary gx-ml-3">ETH_AION</h5>
            <h6 className="gx-text-primary gx-ml-3">Binance guides</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-3">09/28/2018</h5>
            <h6 className="gx-ml-3">3:56 PM</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-4">9.25</h5>
            <h6 className="gx-ml-4">0.01739</h6>
          </div>
          <div className="gx-ml-5">
            <h6>
              <span className="gx-text-danger">-0.69%</span> 0.00186700
            </h6>
            <div className="gx-flex-row">
              <div
                style={{ height: "60px", width: "2px" }}
                className="gx-bg-red"
              ></div>
              <div
                style={{ height: "10px", width: "50px" }}
                className="gx-bg-grey"
              ></div>
              <div
                style={{ height: "20px", width: "2px", marginTop: "-10px" }}
                className="gx-bg-red"
              ></div>
              <div
                style={{ height: "10px", width: "50px" }}
                className="gx-bg-red"
              ></div>
              <div
                style={{ height: "20px", width: "2px" }}
                className="gx-bg-dark"
              ></div>
              <div>
                <div
                  style={{ height: "10px", width: "140px" }}
                  className="gx-bg-grey"
                ></div>
                <h6 className="gx-mt-2">Buy 0.00188000</h6>
                <h6 className="gx-ml-5">0.00191100</h6>
              </div>
              <div>
                <div
                  style={{ height: "30px", width: "2px" }}
                  className="gx-bg-aqua"
                ></div>
                <h6 className="gx-text-aqua" style={{ marginLeft: "-10px" }}>
                  TP
                </h6>
              </div>
            </div>
            <h6>
              <span className="gx-text-danger">SL</span> 0.00182300
            </h6>
          </div>
          <h6 className="gx-text-danger gx-ml-4">-0.00012025</h6>
          <div className="gx-flex-row" style={{ marginLeft: "20px" }}>
            <Button
              className="gx-bg-aqua gx-text-white gx-ml-5 gx-px-2"
              style={{ width: "35px" }}
            >
              <SyncOutlined />
            </Button>
            <Button className="gx-ml-1 gx-px-2" style={{ width: "35px" }}>
              <MoreOutlined />
            </Button>
          </div>
        </div>
        <h6>You can place a note here</h6>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <div className="gx-flex-row gx-mt-4">
          <PlaySquareOutlined />
          <div className="gx-flex-col">
            <h5 className="gx-text-primary gx-ml-3">ETH_AION</h5>
            <h6 className="gx-text-primary gx-ml-3">Binance guides</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-3">09/28/2018</h5>
            <h6 className="gx-ml-3">3:56 PM</h6>
          </div>
          <div className="gx-flex-col gx-ml-5">
            <h5 className="gx-ml-4">9.25</h5>
            <h6 className="gx-ml-4">0.01739</h6>
          </div>
          <div className="gx-ml-5">
            <h6>
              <span className="gx-text-aqua gx-ml-5">+0.69%</span> 0.00186700
            </h6>
            <div className="gx-flex-row">
              <div
                style={{ height: "60px", width: "2px" }}
                className="gx-bg-red"
              ></div>
              <div
                style={{ height: "10px", width: "50px" }}
                className="gx-bg-grey"
              ></div>
              <div
                style={{ height: "20px", width: "2px" }}
                className="gx-bg-dark"
              ></div>
              <div
                style={{ height: "10px", width: "50px" }}
                className="gx-bg-aqua"
              ></div>
              <div
                style={{ height: "20px", width: "2px", marginTop: "-10px" }}
                className="gx-bg-aqua"
              ></div>
              <div>
                <div
                  style={{ height: "10px", width: "140px" }}
                  className="gx-bg-grey"
                ></div>
                <h6 className="gx-mt-2">Buy 0.00188000</h6>
                <h6 className="gx-ml-5">0.01740900</h6>
              </div>
              <div>
                <div
                  style={{ height: "40px", width: "2px" }}
                  className="gx-bg-aqua"
                ></div>
                <h6 className="gx-text-aqua" style={{ marginLeft: "-10px" }}>
                  TP
                </h6>
              </div>
            </div>
            <h6>
              <span className="gx-text-danger">SL</span> 0.00182300
            </h6>
          </div>
          <h6 className="gx-text-danger gx-ml-4">-0.00012025</h6>
          <div className="gx-flex-row" style={{ marginLeft: "20px" }}>
            <Button
              className="gx-bg-aqua gx-text-white gx-ml-5 gx-px-2"
              style={{ width: "35px" }}
            >
              <SyncOutlined />
            </Button>
            <Button className="gx-ml-1 gx-px-2" style={{ width: "35px" }}>
              <MoreOutlined />
            </Button>
          </div>
        </div>
        <h6>You can place a note here</h6>
      </Col>
    </Row>
  );
};

export default Orders;
