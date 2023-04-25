import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import UpdateOwner from "../components/UpdateOwner";
import ProfileCard from "../components/ProfileCard";
import OwnerLandHoldings from "../components/OwnerLandHoldings";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const styles = {
  container: {
    margin: "3%",
  },
};

const SingleOwner = () => {
  const { ownerId } = useParams();
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    fetch(`/api/owners/${ownerId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOwner(data);
      })
      .catch((error) => {
        console.error(error);
        // handle errors
      });
  }, [ownerId]);

  if (!owner) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <Row>
        <Col lg={4}>
          <ProfileCard />
          <UpdateOwner />
          <Button>Delete</Button>
        </Col>
        <Col lg={8}>
          <OwnerLandHoldings />
        </Col>
      </Row>
    </div>
  );
};

export default SingleOwner;
