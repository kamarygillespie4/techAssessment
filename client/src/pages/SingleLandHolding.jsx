import React from "react";
import { Row, Col } from "react-bootstrap";

import UpdateLandHolding from "../components/UpdateLandHolding";
import LandHoldingCard from "../components/LandHoldingCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// const styles = {
//   container: {
//     border: "1px  solid lightGray ",
//     borderRadius: "10px",
//   },
// };

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
    <div>
      <Row>
        <Col lg={4}>
          <UpdateLandHolding />
        </Col>
        <Col lg={8}>
          <LandHoldingCard />
        </Col>
      </Row>
    </div>
  );
};

export default SingleLandHolding;
