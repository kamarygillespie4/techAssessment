import React, { useState } from "react";

const LandForm = (props) => {
  const [owner, setOwner] = useState("");
  const [legalEntity, setLegalEntity] = useState("");
  const [netAcres, setNetAcres] = useState("");
  const [ownerRoyalty, setOwnerRoyalty] = useState("");
  const [section, setSection] = useState("");
  const [township, setTownship] = useState("");
  const [range, setRange] = useState("");
  const [titleSource, setTitleSource] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(owner);
    console.log(legalEntity);
    console.log(netAcres);
    console.log(ownerRoyalty);
    console.log(section);
    console.log(township);
    console.log(range);
    console.log(titleSource);
  };
  return (
    <div className="auth-form-container">
      <h2>Create Land Holding</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="owner">Owner</label>
        <input
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          type="text"
          placeholder="Owner name"
          id="owner"
          name="owner"
        />
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

export default LandForm;
