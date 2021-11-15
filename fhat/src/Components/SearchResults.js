import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "./Reducers/FormContext";

const SearchResults = () => {
  const { v4: uuidv4 } = require("uuid");

  const formContext = useContext(FormContext);

  // State to store results of searchResults fetch
  const [searchResults, setSearchResults] = useState();

  // Use effect to generate activity dynamically
  useEffect(() => {
    fetch(`http://localhost:8000/searchperson/${formContext.state.search}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response in RESULTS then", data.data.results);
        setSearchResults(data.data.results);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [formContext.state.search]);

  return (
    <div>
      {searchResults ? (
        searchResults.map((searchResult) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {searchResult.name} <SugTit>Mass:</SugTit>
              {searchResult.mass}
              <DivLine />
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        // If the user did not select an searchResult preference, don't render anything
        <p>No Results, sorry!</p>
      )}
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
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

export default SearchResults;
