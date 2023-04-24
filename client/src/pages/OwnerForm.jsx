import React, { useState } from "react";
//import LandHolding from "../../../server/models/landHolding";

const OwnerForm = (props) => {
  const [name, setName] = useState("");
  const [entityType, setEntityType] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfHoldings, setNumberOfHoldings] = useState("");
  //TODO: array eventualy??const [landHoldings, setLandHoldings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(entityType);
    console.log(ownerType);
    console.log(address);
    console.log(numberOfHoldings);
    //console.log(LandHoldings);
    const formData = {
      name,
      entityType,
      ownerType,
      address,
      numberOfHoldings,
    };
    fetch("/api/owners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // do something with the response
      })
      .catch((error) => {
        console.error(error);
        // handle errors
      });
  };
  return (
    <div className="">
      <h2>Create Owner</h2>
      <form className="ownerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Owner Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Owner name"
          id="name"
          name="name"
        />

        <label htmlFor="entityType">Entity Type</label>
        <div>
          <input
            type="radio"
            name="entityType"
            value="company"
            id="company"
            onChange={(e) => setEntityType(e.target.value)}
          />
          <label htmlFor="company">Company</label>
        </div>
        <div>
          <input
            type="radio"
            name="entityType"
            value="individual"
            id="individual"
            onChange={(e) => setEntityType(e.target.value)}
          />
          <label htmlFor="individual">Individual</label>
        </div>
        <div>
          <input
            type="radio"
            name="entityType"
            value="investor"
            id="investor"
            onChange={(e) => setEntityType(e.target.value)}
          />
          <label htmlFor="investor">Investor</label>
        </div>
        <div>
          <input
            type="radio"
            name="entityType"
            value="trust"
            id="trust"
            onChange={(e) => setEntityType(e.target.value)}
          />
          <label htmlFor="trust">Trust</label>
        </div>
        <label htmlFor="ownerType">Owner Type</label>
        <div>
          <input
            type="radio"
            name="ownerType"
            value="competitor"
            id="competitor"
            onChange={(e) => setOwnerType(e.target.value)}
          />
          <label htmlFor="competitor">Competitor</label>
        </div>
        <div>
          <input
            type="radio"
            name="ownerType"
            value="seller"
            id="seller"
            onChange={(e) => setOwnerType(e.target.value)}
          />
          <label htmlFor="seller">Seller</label>
        </div>
        <div>
          <input
            type="radio"
            name="ownerType"
            value="investor"
            id="investor"
            onChange={(e) => setOwnerType(e.target.value)}
          />
          <label htmlFor="investor">Investor</label>
        </div>
        <div>
          <input
            type="radio"
            name="ownerType"
            value="professional"
            id="professional"
            onChange={(e) => setOwnerType(e.target.value)}
          />
          <label htmlFor="professional">Professional</label>
        </div>
        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="address"
          id="address"
          name="address"
        />
        <label htmlFor="numberOfHoldings">Total Number of Land Holdings</label>
        <input
          value={numberOfHoldings}
          onChange={(e) => setNumberOfHoldings(e.target.value)}
          type="text"
          placeholder="Total number of land holdings"
          id="numberOfHoldings"
          name="numberOfHoldings"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default OwnerForm;
