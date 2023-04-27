import React, { useState, useEffect } from "react";
//import LandHolding from "../../../server/models/landHolding";
import { useNavigate, useParams } from "react-router-dom";

const styles = {
  question: {
    display: "flex",
    flexDirection: "column",
    margin: "1%",
  },
  label: {
    fontWeight: "normal",
  },
  button: {
    float: "left",
    background: "blue",
    color: "white",

    borderRadius: "5px",
    cursor: "pointer",
    margin: "2%",
    padding: "3%",
  },
  container: {
    border: "1px  solid lightGray ",
    borderRadius: "10px",
    margin: "2%",
  },
  form: {
    padding: "5%",
  },
};

const UpdateOwner = (props) => {
  const { ownerId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [entityType, setEntityType] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(`/api/owners/${ownerId}`)
      .then((response) => response.json())
      .then((owner) => {
        setName(owner.name);
        setEntityType(owner.entityType);
        setOwnerType(owner.ownerType);
        setAddress(owner.address);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  const handleSubmit = (e) => {
    console.log(name);
    console.log(entityType);
    console.log(ownerType);
    console.log(address);

    const formData = {
      name,
      entityType,
      ownerType,
      address,
    };
    fetch(`/api/owners/${ownerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((owner) => {
        console.log(owner);
        navigate(`/protected/owners/${owner._id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={styles.container}>
      <form className="ownerForm" style={styles.form} onSubmit={handleSubmit}>
        <h2 className="fs-4 fw-normal ">Update Owner Profile</h2>
        <div style={styles.question}>
          <label htmlFor="name" style={styles.label}>
            Enter Owner Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Owner name"
            id="name"
            name="name"
          />
        </div>
        <div style={styles.question}>
          <label htmlFor="entityType" style={styles.label}>
            Select Entity Type:
          </label>
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
        </div>
        <div style={styles.question}>
          <label htmlFor="ownerType" style={styles.label}>
            Select Owner Type:
          </label>
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
        </div>
        <div style={styles.question}>
          <label htmlFor="address" style={styles.label}>
            Enter Address:
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="address"
            id="address"
            name="address"
          />
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateOwner;
