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
  if (!str || typeof str !== "string") return "";

  var arr = str.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
};
const LandHoldingCard = (props) => {
  const { ownerId, landHoldingId } = useParams();
  const [owner, setOwner] = useState("");
  const [legalEntity, setLegalEntity] = useState("");
  const [netAcres, setNetAcres] = useState("");
  const [ownerRoyalty, setOwnerRoyalty] = useState("");
  const [section, setSection] = useState("");
  const [township, setTownship] = useState("");
  const [range, setRange] = useState("");
  const [titleSource, setTitleSource] = useState("");
  const [name, setName] = useState("");

  const [sectionName, setSectionName] = useState("");

  useEffect(() => {
    fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`)
      .then((response) => response.json())
      .then((landHolding) => {
        setOwner(landHolding.owner);
        setName(landHolding.name);
        setNetAcres(landHolding.netAcres);
        setOwnerRoyalty(landHolding.ownerRoyalty);
        setSection(landHolding.section);
        setTownship(landHolding.township);
        setRange(landHolding.range);
        setTitleSource(landHolding.titleSource);
        setSectionName(landHolding.sectionName);
        setLegalEntity(landHolding.legalEntity);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  return (
    <div style={styles.container}>
      <div className="landHoldingCard" style={styles.form}>
        <p className="fs-4 fw-normal mb-3">Name: {titleCase(name)}</p>
        <p className="fs-4 fw-normal mb-3">Owner: {titleCase(owner)}</p>
        <p className="fs-4 fw-normal mb-3">
          Legal Entity: {titleCase(legalEntity)}
        </p>
        <p className="fs-4 fw-normal mb-3">
          Net Mineral Acres: {titleCase(netAcres)}
        </p>
        <p className="fs-4 fw-normal mb-3">
          Mineral Owner Royalty (%): {ownerRoyalty}
        </p>
        <p className="fs-4 fw-normal mb-3">
          Section Name: {titleCase(sectionName)}
        </p>
        <p className="fs-4 fw-normal mb-3">Section: {section}</p>
        <p className="fs-4 fw-normal mb-3">Township: {titleCase(township)}</p>
        <p className="fs-4 fw-normal mb-3">Range: {range}</p>

        <p className="fs-4 fw-normal mb-3">
          Title Source: {titleCase(titleSource)}
        </p>
      </div>
    </div>
  );
};

export default LandHoldingCard;
