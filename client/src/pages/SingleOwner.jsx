import React from "react";
import { Row, Col } from "react-bootstrap";

import UpdateOwner from "../components/UpdateOwner";
import ProfileCard from "../components/ProfileCard";
import OwnerLandHoldings from "../components/OwnerLandHoldings";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// const styles = {
//   container: {
//     border: "1px  solid lightGray ",
//     borderRadius: "10px",
//   },
// };

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
    <div>
      <Row>
        <Col lg={4}>
          <ProfileCard />
          <UpdateOwner />
        </Col>
        <Col lg={8}>
          <OwnerLandHoldings />
        </Col>
      </Row>
    </div>
  );
};

export default SingleOwner;
