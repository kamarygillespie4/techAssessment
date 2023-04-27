import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    //background: "#d9d9d9",
    //color: "black",
    //width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    borderColor: "#d9d9d9",
    marginRight: "2%",
    //padding: "1% 2% 1% 2%",
    //fontWeight: "bold",
    fontSize: "small",
    marginBottom: "2%",
  },
  // div: {
  //   padding: "1%",
  // },
};

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    navigate("/");
  };
  const [showNavExternal, setShowNavExternal] = useState(false);
  return (
    <div style={styles.div}>
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
          <Button
            style={styles.button}
            variant="primary"
            href="/protected/owners"
          >
            View Owners
          </Button>
          <Button
            style={styles.button}
            variant="primary"
            href="/protected/ownerForm"
          >
            New Owner
          </Button>
          <Button
            style={styles.button}
            variant="primary"
            href="/protected/allHoldings"
          >
            View Land Holdings
          </Button>
          <Button
            style={styles.button}
            variant="primary"
            onClick={handleLogout}
          >
            Logout{" "}
          </Button>
        </div>
      </MDBCollapse>
    </div>
  );
};

export default NavBar;
