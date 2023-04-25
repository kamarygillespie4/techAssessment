import React, { useState, useEffect } from "react";
import { Button, CardGroup, Card } from "react-bootstrap";

var titleCase = function (str) {
  var arr = str.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
};
function LandHoldingCard(props) {
  const {
    owner,
    legalEntity,
    netAcres,
    ownerRoyalty,
    section,
    township,
    range,
    titleSource,
    sectionName,
  } = props;

  return (
    <div className="land-holding-card h-100 d-flex flex-column ">
      <div className="mb-auto">
        <Card.Body className="m-1">
          <Card.Title>{titleCase(sectionName)}</Card.Title>
          <Card.Text>Owner: {titleCase(owner)}</Card.Text>
          <Card.Text>Legal Entity: {titleCase(legalEntity)}</Card.Text>
          <Card.Text>Net Acres: {netAcres}</Card.Text>
          <Card.Text>Owner Royalty: {ownerRoyalty}</Card.Text>
          <Card.Text>Section: {section}</Card.Text>
          <Card.Text>Township: {township}</Card.Text>
          <Card.Text>Range: {range}</Card.Text>
          <Card.Text>titleSource: {titleSource}</Card.Text>
        </Card.Body>
      </div>
      <div className="text-muted">
        <Card.Footer className="h-100 d-flex flex-column ">
          <Button variant="dark" className="">
            Edit
          </Button>
        </Card.Footer>
      </div>
    </div>
  );
}

const AllHoldings = () => {
  const [landHoldings, setLandHoldings] = useState([]);

  useEffect(() => {
    fetch("/api/owners/landHoldigs")
      .then((response) => response.json())
      .then((data) => setLandHoldings(data));
  }, []);

  // Add a check to ensure that landHoldings is an array before calling map()
  if (!Array.isArray(landHoldings)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="land-holdings-list m-1">
      <h2 className="fs-5 p-2 fw-normal">Viewing All Land Holdings</h2>
      <CardGroup>
        {landHoldings.map((landHolding) => (
          <div className="col-md-6 col-lg-3 col-sm-12 p-1">
            <Card className="h-100">
              <LandHoldingCard
                key={landHolding._id}
                sectionName={landHolding.sectionName}
                owner={landHolding.owner}
                legalEntity={landHolding.legalEntity}
                netAcres={landHolding.netAcres}
                ownerRoyalty={landHolding.ownerRoyalty}
                section={landHolding.section}
                township={landHolding.township}
                range={landHolding.range}
                titleSource={landHolding.titleSource}
              />
            </Card>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};
export default AllHoldings;
