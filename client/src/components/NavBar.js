import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";

import { SlMenu } from "react-icons/sl";

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
          <ul>
            <li>
              <a className=" m-1" color="link" href="/owners">
                View Owners
              </a>
            </li>
            <li>
              <a className=" m-1" color="link" href="/ownerForm">
                New Owner
              </a>
            </li>
            <li>
              <a className=" m-1" color="link" href="/allHoldings">
                View Land Holdings
              </a>
            </li>
          </ul>
        </div>
      </MDBCollapse>
    </>
  );
};

export default NavBar;
