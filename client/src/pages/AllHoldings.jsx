import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

function titleCase(str) {
  if (!str) {
    return "";
  }
  var arr = str.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

function AllHoldings() {
  const [landHoldings, setLandHoldings] = useState([]);

  useEffect(() => {
    fetch("/api/owners/landHoldings")
      .then((response) => response.json())
      .then((data) => setLandHoldings(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="land-holdings-list m-1">
      <h2 className="fs-5 p-2 fw-normal">Viewing All Land Holdings</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {landHoldings.map((landHolding) => (
          <div className="col" key={landHolding._id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{titleCase(landHolding.sectionName)}</Card.Title>
                <Card.Text>
                  Legal Entity: {titleCase(landHolding.legalEntity)} <br />
                  Net Mineral Acres: {landHolding.netAcres} <br />
                  Mineral Owner Royalty: {landHolding.ownerRoyalty} <br />
                  Section Name: {titleCase(landHolding.sectionName)} <br />
                  Section: {landHolding.section} <br />
                  Township: {landHolding.township} <br />
                  Range: {landHolding.range} <br />
                  Title Source: {titleCase(landHolding.titleSource)}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllHoldings;
