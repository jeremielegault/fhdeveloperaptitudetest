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
    </div>
  );
};

const FormLabel = styled.label`
  font-size: 1rem;
  padding-bottom: 15px;
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
  width: auto;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;
export default Homepage;
