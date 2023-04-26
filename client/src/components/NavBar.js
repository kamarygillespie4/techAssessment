import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";

import { SlMenu } from "react-icons/sl";
const styles = {
  button: {
    //float: "left",
    background: "#d9d9d9",
    color: "black",
    //width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    marginRight: "2%",
    padding: "1% 2% 1% 2%",
    //fontWeight: "bold",
    fontSize: "small",
  },
};

const NavBar = () => {
  const [showNavExternal, setShowNavExternal] = useState(false);
  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <span className="fs-4 fw-bold">Phoenix Capital Group</span>
          <MDBNavbarToggler
            className="ms-auto"
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <SlMenu />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className="flex flex-row bg-light shadow-3 p-4">
          <Button style={styles.button} href="/owners">
            View Owners
          </Button>
          <Button style={styles.button} href="/ownerForm">
            New Owner
          </Button>
          <Button style={styles.button} href="/allHoldings">
            View Land Holdings
          </Button>
        </div>
      </MDBCollapse>
    </>
  );
};

export default NavBar;
