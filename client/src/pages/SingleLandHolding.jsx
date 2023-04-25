import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import UpdateLandHolding from "../components/UpdateLandHolding";
import LandHoldingCard from "../components/LandHoldingCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const styles = {
  button: {
    float: "left",
    background: "blue",
    color: "white",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "2%",
    padding: "3%",
  },
  container: {
    //border: "1px  solid lightGray ",
    //borderRadius: "10px",
    margin: "2%",
  },
};

const SingleLandHolding = () => {
  const { ownerId, landHoldingId } = useParams();
  const [owner, setOwner] = useState(null);
  const [landHolding, setLandHolding] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`)
      .then((response) => response.json())
      .then((owner) => {
        setOwner(owner);
        setLandHolding(owner.landHolding);
      })
      .catch((error) => {
        setError(error);
      });
  }, [ownerId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!owner) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <Row>
        <Col lg={6}>
          <LandHoldingCard />
        </Col>
        <Col lg={6}>
          <UpdateLandHolding />
        </Col>
      </Row>
    </div>
  );
};

export default SingleLandHolding;
