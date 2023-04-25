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
const UpdateLandHolding = (props) => {
  const { ownerId, landHoldingId } = useParams();
  const navigate = useNavigate();

  const [owner, setOwner] = useState("");
  const [legalEntity, setLegalEntity] = useState("");
  const [netAcres, setNetAcres] = useState("");
  const [ownerRoyalty, setOwnerRoyalty] = useState("");
  const [section, setSection] = useState("");
  const [township, setTownship] = useState("");
  const [range, setRange] = useState("");
  const [titleSource, setTitleSource] = useState("");

  const sectionName = section + "-" + township + "-" + range;
  const name = sectionName + "-" + legalEntity;

  useEffect(() => {
    fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`)
      .then((response) => response.json())
      .then((landHolding) => {
        setNetAcres(landHolding.netAcres);
        setOwnerRoyalty(landHolding.ownerRoyalty);
        setSection(landHolding.section);
        setTownship(landHolding.township);
        setRange(landHolding.range);
        setTitleSource(landHolding.titleSource);

        setLegalEntity(landHolding.legalEntity);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  const handleSubmit = (e) => {
    console.log(legalEntity);
    console.log(netAcres);
    console.log(ownerRoyalty);
    console.log(section);
    console.log(township);
    console.log(range);
    console.log(titleSource);
    console.log(sectionName);
    console.log(name);
    const formData = {
      legalEntity,
      netAcres,
      ownerRoyalty,
      section,
      township,
      range,
      titleSource,
      sectionName,
      name,
    };
    fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((landHolding) => {
        console.log(landHolding);
        navigate(`/owners/${ownerId}/landHoldings/${landHoldingId}`);

        // do something with the response
      })
      .catch((error) => {
        console.error(error);
        // handle errors
      });
  };

  return (
    <div className="">
      <h2>Create Land Holding</h2>
      <form className="landHoldingForm" onSubmit={handleSubmit}>
        <label htmlFor="legalEntity">Legal Entity</label>
        <input
          value={legalEntity}
          onChange={(e) => setLegalEntity(e.target.value)}
          type="text"
          placeholder="Legal entity"
          id="legalEntity"
          name="legalEntity"
        />
        <label htmlFor="netAcres">Net Mineral Acres</label>
        <input
          value={netAcres}
          onChange={(e) => setNetAcres(e.target.value)}
          type="text"
          placeholder="Net Mineral Acres"
          id="netAcres"
          name="netAcres"
        />
        <label htmlFor="ownerRoyalty">Mineral Owner Royalty (%)</label>
        <input
          value={ownerRoyalty}
          onChange={(e) => setOwnerRoyalty(e.target.value)}
          type="text"
          placeholder="Mineral Owner Royalty"
          id="ownerRoyalty"
          name="ownerRoyalty"
        />
        <label htmlFor="section">Section</label>
        <input
          value={section}
          onChange={(e) => setSection(e.target.value)}
          type="text"
          placeholder="Section"
          id="section"
          name="section"
        />
        <label htmlFor="township">Township</label>
        <input
          value={township}
          onChange={(e) => setTownship(e.target.value)}
          type="text"
          placeholder="Township"
          id="township"
          name="township"
        />
        <label htmlFor="range">Range</label>
        <input
          value={range}
          onChange={(e) => setRange(e.target.value)}
          type="text"
          placeholder="Range"
          id="range"
          name="range"
        />
        <label htmlFor="titleSource">Title Source</label>
        <div>
          <input
            type="radio"
            name="titleSource"
            value="Class A"
            id="classA"
            onChange={(e) => setTitleSource(e.target.value)}
          />
          <label htmlFor="contactChoice1">Class A</label>
        </div>
        <div>
          <input
            type="radio"
            name="titleSource"
            value="Class B"
            id="classb"
            onChange={(e) => setTitleSource(e.target.value)}
          />
          <label htmlFor="contactChoice1">Class B</label>
        </div>
        <div>
          <input
            type="radio"
            name="titleSource"
            value="Class C"
            id="classC"
            onChange={(e) => setTitleSource(e.target.value)}
          />
          <label htmlFor="contactChoice1">Class C</label>
        </div>
        <div>
          <input
            type="radio"
            name="titleSource"
            value="Class D"
            id="classD"
            onChange={(e) => setTitleSource(e.target.value)}
          />
          <label htmlFor="contactChoice1">Class D</label>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default UpdateLandHolding;
