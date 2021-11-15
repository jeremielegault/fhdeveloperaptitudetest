import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "./Reducers/FormContext";

const Homepage = () => {
  const {
    state: { dropdown, search },
    receiveFormInfo,
  } = useContext(FormContext);

  const [formData, setFormData] = useState({ dropdown, search });

  return (
    <Wrapper>
      <h1>Star Wars Data Finder</h1>
      <FormLabel>
        Choose between a list of a planets, people and starships from the Star
        Wars Universe
      </FormLabel>
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
      <DivLine />
      <Link to="/dropresults">
        <Button
          onClick={(e) => {
            receiveFormInfo({
              ...formData,
            });
          }}
        >
          Dropdown
        </Button>
      </Link>
      <h2>OR</h2>
      <FormLabel>Search for a person by typing their name here:</FormLabel>
      <input
        type="text"
        value={formData.search}
        name="search"
        onChange={(event) => {
          setFormData({ ...formData, search: event.target.value });
        }}
        placeholder="Name"
      ></input>
      <DivLine />

      <Link to="/searchresults">
        <Button
          onClick={(e) => {
            receiveFormInfo({
              ...formData,
            });
          }}
        >
          Search
        </Button>
      </Link>
    </Wrapper>
  );
};

const FormLabel = styled.h3`
  font-size: 1rem;
  padding-bottom: 15px;
`;

const DivLine = styled.div`
  color: black;
  padding: 5px 0 5px 0;
  width: 500px;
`;

const DropdownForm = styled.select`
  background-color: #bec7c7;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  height: 35px;
  align-items: center;
  width: auto;
  font-weight: bold;
  background-color: #bb2020;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

const Wrapper = styled.div`
  background-color: #ffeb4d;
  align-items: center;
  justify-content: center;
`;

export default Homepage;
