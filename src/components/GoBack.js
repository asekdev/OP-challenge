import React from "react";
import { Button, Row, Col } from "reactstrap";
import { IoIosArrowBack } from "react-icons/io";

const GoBack = () => {
  return (
    <Row className="mt-3">
      <Col>
        <Button outline className="float-left goback-btn">
          <IoIosArrowBack size="30" /> Back
        </Button>
      </Col>
    </Row>
  );
};

export default GoBack;
