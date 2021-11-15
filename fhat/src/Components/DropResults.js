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

  // Use effect to generate activity dynamically
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
        console.log("response in RESULTS then", data.data.results);
        setDropResults(data.data.results);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div>
      {dropResults ? (
        dropResults.map((dropResult) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {dropResult.name} <SugTit>Mass:</SugTit>
              {dropResult.mass}
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
    </div>
  );
};

const FormLabel = styled.label`
  font-size: 1rem;
  padding-bottom: 15px;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const WhatWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee0ed;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

const DropdownForm = styled.select`
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  height: 35px;
  width: 60px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

const SugTit = styled.div`
  font-weight: bold;
`;
const Suggestion = styled.div``;

const SugWrap = styled.div`
  background-color: #87a1c6;
  color: white;
  border-radius: 5px;
  padding: 3px 0 3px 0;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px;
`;

export default DropResults;
