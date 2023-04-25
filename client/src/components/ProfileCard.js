import React, { useState, useEffect } from "react";
//import LandHolding from "../../../server/models/landHolding";
import { useParams } from "react-router-dom";

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
    marginRight: "20px",
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
var titleCase = function (str) {
  var arr = str.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
};
const ProfileCard = (props) => {
  const { ownerId } = useParams();

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

  return (
    <div style={styles.container}>
      <form className="ownerForm" style={styles.form}>
        <h2 className="fs-4 fw-normal mb-3">{titleCase(name)}'s Profile</h2>
        <p>Entity Type: {titleCase(entityType)}</p>
        <p>Owner Type: {titleCase(ownerType)}</p>
        <p>Address: {titleCase(address)}</p>
      </form>
    </div>
  );
};

export default ProfileCard;
