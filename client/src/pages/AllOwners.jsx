import React, { useState, useEffect } from "react";
import { Button, CardGroup, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

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

function OwnerCard(props) {
  const { name, entityType, ownerType, address, numberOfHoldings, ownerId } =
    props;
  const navigate = useNavigate();

  const handleViewOwner = () => {
    navigate(`/protected/owners/${ownerId}`);
  };

  return (
    <div className="owner-card h-100 d-flex flex-column ">
      <div className="mb-auto">
        <Card.Body className="m-1">
          <Card.Title>{titleCase(name)}</Card.Title>
          <Card.Text>Entity Type: {titleCase(entityType)}</Card.Text>
          <Card.Text>Owner Type: {titleCase(ownerType)}</Card.Text>
          <Card.Text>Address: {titleCase(address)}</Card.Text>
        </Card.Body>
      </div>
      <div className="text-muted">
        <Card.Footer className="h-100 d-flex flex-column ">
          <Button variant="dark" className="" onClick={handleViewOwner}>
            View Owner
          </Button>
        </Card.Footer>
      </div>
    </div>
  );
}

const AllOwners = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetch("/api/owners")
      .then((response) => response.json())
      .then((data) => setOwners(data));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="owners-list m-1">
        <h2 className="fs-5 p-2 fw-normal">Viewing All Owners</h2>
        <CardGroup>
          {owners.map((owner) => (
            <div className="col-md-6 col-lg-3 col-sm-12 p-1" key={owner._id}>
              <Card className="h-100">
                <OwnerCard
                  name={owner.name}
                  address={owner.address}
                  entityType={owner.entityType}
                  ownerType={owner.ownerType}
                  numberOfHoldings={owner.numberOfHoldings}
                  ownerId={owner._id}
                />
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default AllOwners;
