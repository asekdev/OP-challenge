import React from "react";
import { ButtonGroup, Row, Col } from "reactstrap";
import PaymentOption from "./PaymentOption";

const PaymentOptionGroup = ({ intervalType, data, children }) => {
  return (
    <Row className="mt-4">
      <Col>
        <ButtonGroup vertical className="w-100">
          {data.map((paymentType, index) => (
            <PaymentOption
              key={index}
              intervalType={intervalType}
              optionData={paymentType}
            />
          ))}
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default PaymentOptionGroup;
