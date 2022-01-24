import { Tabs, Col, Row, Input, Slider, Button, Select, Card } from "antd";

const { Option } = Select;

const { TabPane } = Tabs;

const selectBefore = (
  <Select
    defaultValue="last"
    className="select-before gx-bg-aqua gx-text-white"
  >
    <Option value="last">Last</Option>
  </Select>
);

const Tabnav = () => {
  return (
    <Tabs defaultActiveKey="2" className="gx-mt-4">
      <TabPane tab="Buy/Sell" key="1">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Trade" key="2">
        <Row>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card>
              <div className="gx-flex-row gx-mt-4">
                <h5>Units</h5>
              </div>
              <Input addonAfter="BTC" defaultValue="0.250000" />
              <h6 style={{ marginTop: 20 }}>Size from available amount</h6>
              <div className="gx-flex-row">
                <Button className="gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0 gx-bg-grey gx-w-20">
                  100%
                </Button>
                <Button className="gx-flex-row gx-justify-content-center gx-text-white gx-px-3 gx-mx-0 gx-bg-aqua gx-w-20">
                  5%
                </Button>
                <Button className="gx-flex-row gx-justify-content-center gx-px-3 gx-bg-grey gx-mx-0 gx-w-20">
                  10%
                </Button>
                <Button className="gx-flex-row gx-justify-content-center gx-px-3 gx-bg-grey gx-mx-0 gx-w-20">
                  25%
                </Button>
                <Button className="gx-flex-row gx-justify-content-center gx-px-3 gx-bg-grey gx-mx-0 gx-w-20">
                  50%
                </Button>
              </div>
              <div className="gx-flex-row gx-mt-5">
                <h5>Bought price</h5>
              </div>
              <Input addonAfter="USDT" defaultValue="10874.72" />
              <div className="gx-flex-row gx-mt-4">
                <h6>
                  Current Price:{" "}
                  <span className="gx-text-primary">10868.39 USDT</span>
                </h6>
              </div>
              <div className="gx-flex-row gx-mt-5">
                <h5>Total</h5>
              </div>
              <Input addonAfter="USDT" defaultValue="2718.68000000" />
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card>
              <div className="gx-flex-row gx-mt-4">
                <h5>Take Profit</h5>
              </div>
              <div className="gx-flex-row">
                <Button className="gx-w-50 gx-mx-0 gx-text-white gx-bg-aqua">
                  Limit Order
                </Button>
                <Button className="gx-w-50 gx-mx-0 gx-bg-grey">
                  Market Order
                </Button>
              </div>
              <h6 className="gx-mt-1">
                Will be placed on the exchange order book beforehand
              </h6>
              <Input
                addonAfter="USDT"
                defaultValue="11962.20"
                className="gx-mt-3"
              />
              <div className="gx-mt-4 gx-flex-row">
                <div className="gx-w-66">
                  <Slider defaultValue={30} />
                </div>
                <div className="gx-w-33">
                  <Input
                    addonAfter="%"
                    defaultValue="10"
                    className="gx-text-center"
                  />
                </div>
              </div>
              <Button primary className="gx-mt-5 gx-w-100">
                Split Targets
              </Button>
              <h6 className="gx-mt-3">Trailing Take Profit</h6>
              <div className="gx-flex-row">
                <Button className="gx-bg-aqua gx-text-white gx-mx-0 gx-px-5">
                  OFF
                </Button>
                <Button className="gx-bg-grey gx-px-5">ON</Button>
              </div>
              <div className="gx-mt-3">
                <h6>Follow max price with deviaton(%)</h6>
              </div>
              <div className="gx-flex-row">
                <div className="gx-w-66">
                  <Slider defaultValue={30} reverse={true} />
                </div>
                <div className="gx-w-33">
                  <Input
                    addonAfter="%"
                    defaultValue="-5.00"
                    className="gx-text-center"
                  />
                </div>
              </div>
            </Card>
            <Button className="gx-w-100 gx-bg-aqua gx-text-white">
              Create Trade
            </Button>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card>
              <div className="gx-flex-row gx-mt-4">
                <h5>Stop Loss</h5>
              </div>
              <div className="gx-flex-row">
                <Button className="gx-w-50 gx-mx-0 gx-bg-grey">
                  Limit Order
                </Button>
                <Button className="gx-w-50 gx-mx-0 gx-text-white gx-bg-aqua">
                  Market Order
                </Button>
              </div>
              <h6 className="gx-mt-1">
                Will execute at actual rates when the price meets Stop Loss
                conditions
              </h6>
              <Input
                addonBefore={selectBefore}
                addonAfter="USDT"
                defaultValue="10439.73"
                className="gx-mt-4"
              />
              <div className="gx-flex-row gx-mt-4">
                <div className="gx-w-66">
                  <Slider defaultValue={30} reverse={true} />
                </div>
                <div className="gx-w-33">
                  <Input
                    addonAfter="%"
                    defaultValue="-5.00"
                    className="gx-text-center"
                  />
                </div>
              </div>
              <h6 className="gx-mt-3">Stop Loss timeout</h6>
              <div className="gx-flex-row">
                <div className="gx-flex-row">
                  <Button className="gx-bg-aqua gx-text-white gx-mx-0 gx-px-5">
                    OFF
                  </Button>
                  <Button className="gx-bg-grey gx-px-5">ON</Button>
                </div>
                <Input
                  addonAfter="Sec"
                  defaultValue="300"
                  className="gx-w-33 gx-ml-4"
                />
              </div>
              <h6 className="gx-mt-3">Trailing Stop Loss</h6>
              <div className="gx-flex-row">
                <div className="gx-flex-row">
                  <Button className="gx-bg-aqua gx-text-white gx-mx-0 gx-px-5">
                    OFF
                  </Button>
                  <Button className="gx-bg-grey gx-px-5">ON</Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Smart Sell" key="3">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Cover" key="4">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Buy" key="5">
        <div style={{ height: "400px" }}></div>
      </TabPane>
    </Tabs>
  );
};

export default Tabnav;
