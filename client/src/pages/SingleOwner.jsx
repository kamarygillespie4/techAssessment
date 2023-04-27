import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import UpdateOwner from "../components/UpdateOwner";
import ProfileCard from "../components/ProfileCard";
import OwnerLandHoldings from "../components/OwnerLandHoldings";

import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
const styles = {
  question: {
    display: "flex",
    flexDirection: "column",
    margin: "1%",
    fontSize: "small",
  },
  label: {
    // fontWeight: "normal",
  },
  data: {
    fontWeight: "normal",
    fontSize: "small",
  },
  button: {
    float: "left",
    background: "#ff4f4b",
    color: "white",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    marginTop: "2%",
    padding: "3%",
  },
  container: {
    // border: "1px  solid lightGray ",
    // borderRadius: "10px",
    margin: "2%",
  },
  form: {
    padding: "5%",
  },
  header: {
    marginBottom: "1%",
    padding: "2%",
  },
};

const SingleOwner = () => {
  // const { ownerId } = useParams();
  // const [owner, setOwner] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`/api/owners/${ownerId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setOwner(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // handle errors
  //     });
  // }, [ownerId]);
  // const deleteOwner = () => {
  //   if (
  //     window.confirm(
  //       "Are you sure you want to delete this Owner? All associated Land Holdings will be deleted as well."
  //     )
  //   ) {
  //     fetch(`/api/owners/${ownerId}`, {
  //       method: "DELETE",
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         alert("Owner deleted successfully!");
  //         navigate(`/protected/owners`);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         alert("An error occurred while deleting the Owner.");
  //       });
  //   }
  // };

  // if (!owner) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <NavBar />
      <div>
        <Row>
          <Col lg={4}>
            <ProfileCard />
            <UpdateOwner />
            {/* <Button style={styles.button} onClick={deleteOwner}>
              Delete Owner
            </Button> */}
          </Col>
          <Col lg={8}>
            <OwnerLandHoldings />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleOwner;
