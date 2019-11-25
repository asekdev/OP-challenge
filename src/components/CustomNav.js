import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { connect } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

const CustomNav = ({ totalCart }) => {
  return (
    <div>
      <Navbar color="light">
        <NavbarBrand href="/">
          <span className="brand-first-half">open</span>
          <strong>
            <span className="brand-second-half">pay</span>
          </strong>
        </NavbarBrand>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link user-cart">
                <FiShoppingCart className="pr-1" size="25" /> ${totalCart}
              </span>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  totalCart: state.totalCart
});

export default connect(mapStateToProps, null)(CustomNav);
