import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import FormContext from "./Reducers/FormContext";

const Homepage = () => {
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
    if (!formData) {
      fetch(`http://localhost:8000/get${formContext.dropdown}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("response in RESULTS then", data);
          setDropResults(data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  });

  return (
    <div>
      <h1>Hello</h1>
      <FormLabel>Which list do you wish to display?</FormLabel>
      <DropdownForm
        selected={formData.dropdown}
        value={formData.dropdown}
        onChange={(event) => {
          setFormData({ ...formData, dropdown: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </DropdownForm>
      <Button
        onClick={() => {
          receiveFormInfo({
            ...formData,
          });
        }}
      >
        Next
      </Button>
      {dropResults ? (
        dropResults.map((dropResult) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {dropResult} <SugTit>Address:</SugTit>
              {dropResult}
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        // If the user did not select an dropResult preference, don't render anything
        <p>No Results, sorry!</p>
      )}
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

export default Homepage;
