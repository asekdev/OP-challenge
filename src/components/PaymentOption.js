import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { updateSelectedPlan } from "../redux/actions/actions";
import Moment from "react-moment";
import { IoIosCheckmark } from "react-icons/io";

const PaymentOption = ({
  intervalType,
  optionData,
  planDate,
  planSelected,
  totalCart,
  updateSelection
}) => {
  const { paymentCount } = optionData;
  const paymentInstallments =
    intervalType === "fortnightly" ? paymentCount / 2 : paymentCount;
  const installments = totalCart / paymentCount;

  const determineActiveState = () => {
    return (
      intervalType === planSelected.interval &&
      paymentInstallments === planSelected.paymentCount
    );
  };

  const paymentDueDate = () => {
    if (intervalType === "monthly") {
      return { months: paymentCount };
    }
    return { weeks: paymentCount };
  };

  return (
    <Col lg={12} md={12} sm={12}>
      <Button
        className="pl-3 selection-button"
        color="light"
        onClick={() =>
          updateSelection({
            interval: intervalType,
            paymentCount: paymentInstallments
          })
        }
        block
      >
        <Row>
          <Col>
            <p className="text-left mb-0 pt-2 option-finish">
              Finishes{" "}
              <Moment add={paymentDueDate()} format="Do of MMMM">
                {planDate.start}
              </Moment>
            </p>
            <p className="text-left mb-0 pb-2 option-payments">
              {paymentInstallments} x ${installments.toFixed(2)}
              <span className="p-1">&#8226;</span>
              {intervalType.charAt(0).toUpperCase() + intervalType.slice(1)}
              <span className="p-1">&#8226;</span>
              Inc. fee
            </p>
          </Col>
          {determineActiveState() === true && (
            <Col
              lg={5}
              md={5}
              sm={2}
              xs={2}
              className="justify-content-center align-items-center p-0"
            >
              <h1 className="text-right pr-3 mt-0 mb-0">
                <IoIosCheckmark color="#33d9b2" />
              </h1>
            </Col>
          )}
        </Row>
      </Button>
    </Col>
  );
};

const mapStateToProps = state => ({
  planDate: state.planDate,
  planSelected: state.planSelected,
  totalCart: state.totalCart
});

const mapDispatchToProps = dispatch => {
  return {
    updateSelection: e => dispatch(updateSelectedPlan(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOption);
