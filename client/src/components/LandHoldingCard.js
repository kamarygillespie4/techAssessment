import React, { useState, useEffect } from "react";
//import LandHolding from "../../../server/models/landHolding";
import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";

const styles = {
  question: {
    display: "flex",
    flexDirection: "column",
    margin: "1%",
    fontSize: "small",
  },
  label: {
    // fontWeight: "normal",
  },
  data: {
    fontWeight: "normal",
    fontSize: "small",
  },
  button: {
    float: "left",
    background: "#ff4f4b",
    color: "white",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    marginTop: "2%",
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
  header: {
    marginBottom: "1%",
    padding: "2%",
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
  const [legalEntity, setLegalEntity] = useState("");
  const [netAcres, setNetAcres] = useState("");
  const [ownerRoyalty, setOwnerRoyalty] = useState("");
  const [section, setSection] = useState("");
  const [township, setTownship] = useState("");
  const [range, setRange] = useState("");
  const [titleSource, setTitleSource] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [sectionName, setSectionName] = useState("");
  const [owner, setOwner] = useState("");
  useEffect(() => {
    fetch(`/api/owners/${ownerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((owner) => {
        setOwner(owner.name);
        console.log(owner.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ownerId]);

  useEffect(() => {
    fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`)
      .then((response) => response.json())
      .then((landHolding) => {
        //setOwner(landHolding.owner);
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
  const deleteLandHolding = () => {
    if (window.confirm("Are you sure you want to delete this landholding?")) {
      fetch(`/api/owners/${ownerId}/landHoldings/${landHoldingId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          alert("Land Holding deleted successfully!");
          navigate(`/protected/owners/${ownerId}`);
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while deleting the Land Holding.");
        });
    }
  };

  return (
    <div>
      {/* <h2 className="fs-4 fw-normal " style={styles.header}>
        {titleCase(owner)}'s Land Holding
      </h2> */}
      <div style={styles.container}>
        <div className="landHoldingCard" style={styles.form}>
          <Row>
            <Col>
              <div>
                <label style={styles.label}>Name: </label>
                <p style={styles.data}>{titleCase(name)}</p>
              </div>
              <div>
                <label style={styles.label}>Owner: </label>
                <p style={styles.data}>{titleCase(owner)}</p>
              </div>
              <div>
                <label style={styles.label}>Legal Entity: </label>
                <p style={styles.data}>{titleCase(legalEntity)}</p>
              </div>
              <div>
                <label style={styles.label}>Net Mineral Acres: </label>
                <p style={styles.data}>{titleCase(netAcres)}</p>
              </div>
              <div>
                <label style={styles.label}>Mineral Owner Royalty (%): </label>
                <p style={styles.data}>{ownerRoyalty}</p>
              </div>
            </Col>
            <Col>
              <div>
                <label style={styles.label}>Section Name: </label>
                <p style={styles.data}>{titleCase(sectionName)}</p>
              </div>
              <div>
                <label style={styles.label}>Section: </label>
                <p style={styles.data}>{section}</p>
              </div>
              <div>
                <label style={styles.label}>Township: </label>
                <p style={styles.data}>{titleCase(township)}</p>
              </div>
              <div>
                <label style={styles.label}>Range: </label>
                <p style={styles.data}>{range}</p>
              </div>
              <div>
                <label style={styles.label}>Title Source: </label>
                <p style={styles.data}>{titleCase(titleSource)}</p>
              </div>
            </Col>
            <Button
              type="submit"
              style={styles.button}
              onClick={deleteLandHolding}
            >
              Delete Land Holding
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LandHoldingCard;
