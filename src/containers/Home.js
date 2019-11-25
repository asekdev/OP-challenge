import React, { useState } from "react";
import CustomNav from "../components/CustomNav";
import PaymentOptionGroup from "../components/PaymentOptionGroup";
import { response } from "../api";
import { filterIntervals } from "../utils";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import GoBack from "../components/GoBack";

const Home = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [apiResponse, setApiResponse] = useState(response);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="App">
      <CustomNav />
      <Container>
        <GoBack />
        <Row className="mt-5">
          <Col>
            <h3 className="float-left mb-5 customise-header">
              Customise your plan
            </h3>
          </Col>
        </Row>
        <Nav tabs pills fill justified>
          <NavItem>
            <NavLink
              className={activeTab === "weekly" ? "active" : null}
              onClick={() => {
                toggle("weekly");
              }}
            >
              Weekly
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "fortnightly" ? "active" : null}
              onClick={() => {
                toggle("fortnightly");
              }}
            >
              Fortnightly
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "monthly" ? "active" : null}
              onClick={() => {
                toggle("monthly");
              }}
            >
              Monthly
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="weekly">
            <PaymentOptionGroup
              intervalType="weekly"
              data={apiResponse.filter(d =>
                filterIntervals("weekly", d.interval)
              )}
            />
          </TabPane>
          <TabPane tabId="fortnightly">
            <PaymentOptionGroup
              intervalType="fortnightly"
              data={apiResponse.filter(d =>
                filterIntervals("fortnightly", d.interval)
              )}
            />
          </TabPane>
          <TabPane tabId="monthly">
            <PaymentOptionGroup
              intervalType="monthly"
              data={apiResponse.filter(d =>
                filterIntervals("monthly", d.interval)
              )}
            />
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default Home;
