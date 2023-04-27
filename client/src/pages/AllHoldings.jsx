import React, { useState, useEffect } from "react";
import Navbar from "./../components/NavBar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function AllHoldings() {
  const [landHoldings, setLandHoldings] = useState([]);

  useEffect(() => {
    fetch("/api/owners/landHoldings")
      .then((res) => res.json())
      .then((data) => setLandHoldings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <h1>All Land Holdings</h1>
        {landHoldings && landHoldings.length === 0 && (
          <p>No land holdings found.</p>
        )}
        {Array.isArray(landHoldings) &&
          landHoldings.map((landHolding) => (
            <Card key={landHolding._id} className="mb-3">
              <Card.Body>
                <Card.Title>{landHolding.name}</Card.Title>
                <Card.Text>Legal Entity: {landHolding.legalEntity}</Card.Text>
                <Card.Text>Net Acres: {landHolding.netAcres}</Card.Text>
                <Card.Text>Owner Royalty: {landHolding.ownerRoyalty}</Card.Text>
                <Card.Text>Section Name: {landHolding.sectionName}</Card.Text>
                <Card.Text>Section: {landHolding.section}</Card.Text>
                <Card.Text>Township: {landHolding.township}</Card.Text>
                <Card.Text>Range: {landHolding.range}</Card.Text>
                <Card.Text>Title Source: {landHolding.titleSource}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </Container>
    </div>
  );
}

export default AllHoldings;
