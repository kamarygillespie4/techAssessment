import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";

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
    padding: "5%",
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
  const { landHolding } = props;

  return (
    <div className="owner-card h-100 d-flex flex-column ">
      <div className="mb-auto">
        <Card.Body className="m-1">
          <Card.Title>{titleCase(landHolding.owner)}</Card.Title>
          <Card.Text>
            Legal Entity: {titleCase(landHolding.legalEntity)}
          </Card.Text>
          <Card.Text>Net Acres: {landHolding.netAcres}</Card.Text>
          <Card.Text>Address: {titleCase(landHolding.entityType)}</Card.Text>
          <Card.Text>Owner Royalty: {landHolding.ownerRoyalty}</Card.Text>
          <Card.Text>Section: {landHolding.section}</Card.Text>
          <Card.Text>Section Name: {landHolding.sectionName}</Card.Text>
          <Card.Text>Township: {landHolding.township}</Card.Text>
          <Card.Text>Range: {landHolding.range}</Card.Text>
          <Card.Text>Title Source: {landHolding.titleSource}</Card.Text>
        </Card.Body>
      </div>
      <div className="text-muted">
        <Card.Footer className="h-100 d-flex flex-column ">
          <Button variant="dark" className="">
            View
          </Button>
        </Card.Footer>
      </div>
    </div>
  );
}

const OwnerLandHoldings = (props) => {
  const { ownerId } = useParams();

  const [owner, setOwner] = useState("");
  const [landHoldings, setLandHoldings] = useState([]);

  useEffect(() => {
    fetch(`/api/owners/${ownerId}/landHoldings`)
      .then((response) => response.json())
      .then((landHolding) => {
        console.log(landHolding);

        setLandHoldings(landHolding);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  return (
    <div style={styles.container}>
      <h2 className="fs-4 fw-normal mb-3">Land Holdings</h2>
      <div className="row">
        {landHoldings &&
          landHoldings.map((landHolding) => (
            <div className="col-lg-4 mb-3">
              <LandHoldingCard landHolding={landHolding} owner={owner} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OwnerLandHoldings;
