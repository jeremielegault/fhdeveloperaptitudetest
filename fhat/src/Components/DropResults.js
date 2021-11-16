import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "./Reducers/FormContext";

const DropResults = () => {
  const { v4: uuidv4 } = require("uuid");

  const formContext = useContext(FormContext);

  const {
    state: { dropdown, search },
    receiveFormInfo,
  } = useContext(FormContext);

  const [formData, setFormData] = useState({ dropdown, search });

  // State to store results of dropResults fetch
  const [dropResults, setDropResults] = useState();

  // Use effect to generate get either people, planets or starships
  useEffect(() => {
    fetch(`http://localhost:8000/get${formContext.state.dropdown}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDropResults(data.data.results);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [formContext.state.dropdown]);

  return (
    <Wrapper>
      {dropResults ? (
        dropResults.map((dropResult) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {dropResult.name}
              <DivLine />
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        // If the user did not select an dropResult preference, don't render anything
        <p>No Results, sorry!</p>
      )}
      <Link to="/">
        <Button
          onClick={(e) => {
            receiveFormInfo({
              ...formData,
            });
          }}
        >
          Back
        </Button>
      </Link>
    </Wrapper>
  );
};

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

const Button = styled.button`
  justify-content: center;
  height: 35px;
  width: 60px;
  font-weight: bold;
  background-color: #bb2020;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
  margin-top: 15px;
`;

const SugTit = styled.div`
  font-weight: bold;
`;
const Suggestion = styled.div``;

const SugWrap = styled.div`
  background-color: #bec7c7;
  color: white;
  border-radius: 5px;
  padding: 3px 0 3px 0;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  background-color: #ffeb4d;
  align-items: center;
  justify-content: center;
`;

export default DropResults;
