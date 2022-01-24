import React from "react";
import { Select, Col, Row, Card } from "antd";

const { Option } = Select;

const currencyList = [
  {
    name: "USDT",
    price: '7115.47628661',
    src: "../../../../cryptoIcons/color/usdt.png",
  },
  {
    name: "BTC",
    price: '0.999',
    src: "../../../../cryptoIcons/color/btc.png",
  },
  {
    name: "ETH",
    price: '49.95',
    src: "../../../../cryptoIcons/color/eth.png",
  },
  {
    name: "EUR",
    price: '0',
    src: "../../../../cryptoIcons/color/EUR.png",
  },
  {
    name: "BUSD",
    price: '0',
    src: "../../../../cryptoIcons/color/comp.png",
  },
  {
    name: "GBP",
    price: '0',
    src: "../../../../cryptoIcons/color/gbp.png",
  },
  {
    name: "AUD",
    price: '0',
    src: "../../../../cryptoIcons/color/audr.png",
  },
  {
    name: "BNB",
    price: '299.7',
    src: "../../../../cryptoIcons/color/bnb.png",
  },
];
const Selection = () => {
  return (
    <Card>
      <Row>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <h5>Exchange</h5>
          <Select
            defaultValue="lucy"
            style={{ width: "100%", borderRadius: 0 }}
          >
            <Option value="lucy">Paper Account 978785</Option>
          </Select>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <h5>Market</h5>
          <Select defaultValue="ETH" style={{ width: "100%" }}>
            {currencyList.map((item, index) => (
              <Option value={item.name}>
                <div className="gx-flex-row gx-align-items-center gx-justify-content-between">
                  <div>
                    <img src={item.src} style={{ width: "20px" }}></img><span className="gx-font-weight-bold gx-ml-2">{item.name}</span>
                  </div>
                  <h5 className="gx-mt-2 gx-ml-2">{item.price} <span className="gx-font-weight-bold">{item.name}</span></h5>
                </div>
              </Option>
            ))}
          </Select>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <h5>Trading Pair</h5>
          <Select defaultValue="lucy" style={{ width: "100%" }}>
            <Option value="lucy">
              <div className="gx-flex-row gx-align-items-center">
                <div>
                  <img
                    src="../../../../cryptoIcons/color/aave.png"
                    style={{ width: "20px" }}
                  ></img>
                </div>
                <h5 className="gx-mt-2 gx-ml-2">AAVE/ETH</h5>
              </div>
            </Option>
          </Select>
        </Col>
      </Row>
    </Card>
  );
};

export default Selection;
