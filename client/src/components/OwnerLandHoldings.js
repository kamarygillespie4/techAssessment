import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";

const styles = {
  button: {
    float: "left",
    background: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "20px",
  },
  container: {
    border: "1px  solid lightGray ",
    borderRadius: "10px",
    margin: "1%",
    padding: "2%",
  },
  header: {
    marginBottom: "1%",
    padding: "1%",
  },
  form: {},
};

var titleCase = function (str) {
  if (!str) return "";

  var arr = str.split(" ");
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }

  return newArr.join(" ");
};

function LandHoldingCard(props) {
  const { landHolding, ownerId } = props;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/owners/${ownerId}/landHoldings/${props.landHoldingId}`);
  };

  return (
    <div className="owner-card">
      <div className="">
        <Card.Body className="m-1">
          <Card.Title className="mb-3">
            {titleCase(landHolding.sectionName)}
          </Card.Title>
          <Row className="mb-3 fs-6">
            <Col lg={4}>
              <Card.Text>
                Legal Entity: {titleCase(landHolding.legalEntity)}
              </Card.Text>
              <Card.Text>Net Acres: {landHolding.netAcres}</Card.Text>
              <Card.Text>
                Address: {titleCase(landHolding.entityType)}
              </Card.Text>
            </Col>
            <Col lg={4}>
              <Card.Text>Owner Royalty: {landHolding.ownerRoyalty}</Card.Text>
              <Card.Text>Section: {landHolding.section}</Card.Text>
              <Card.Text>Section Name: {landHolding.sectionName}</Card.Text>
            </Col>
            <Col lg={4}>
              <Card.Text>Township: {landHolding.township}</Card.Text>
              <Card.Text>Range: {landHolding.range}</Card.Text>
              <Card.Text>Title Source: {landHolding.titleSource}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </div>
      <div className="text-muted">
        <Card.Footer className="h-100 d-flex flex-column ">
          <Button variant="dark" className="" onClick={handleViewClick}>
            View
          </Button>
        </Card.Footer>
      </div>
    </div>
  );
}

const OwnerLandHoldings = (props) => {
  const { ownerId } = useParams();
  const [owner, setOwner] = useState(null);
  const [landHoldings, setLandHoldings] = useState(null);

  useEffect(() => {
    fetch(`/api/owners/${ownerId}`)
      .then((response) => response.json())
      .then((owner) => {
        setOwner(owner);
        setLandHoldings(owner.landHoldings);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  return (
    <div>
      <h2 className="fs-4 fw-normal " style={styles.header}>
        Land Holdings
      </h2>
      <div>
        {owner && owner.landHoldings.length > 0 ? (
          owner.landHoldings.map((landHolding) => (
            <div style={styles.container}>
              <LandHoldingCard
                landHolding={landHolding}
                ownerId={ownerId}
                landHoldingId={landHolding._id}
              />
            </div>
          ))
        ) : (
          <div style={styles.container}>
            <p>This owner has no land holdings</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerLandHoldings;
