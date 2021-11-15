"use strict";

require("dotenv").config();

var axios = require("axios");

const request = require("request-promise");

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

// Get the list of people
const getPeople = async (req, res) => {
  var request = {
    method: "get",
    url: "https://swapi.dev/api/people/",
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Get the list of planets
const getPlanets = async (req, res) => {
  var request = {
    method: "get",
    url: "https://swapi.dev/api/planets/",
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getStarships = async (req, res) => {
  var request = {
    method: "get",
    url: "https://swapi.dev/api/starships/",
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const searchPerson = async (req, res) => {
  var request = {
    method: "get",
    url: `https://swapi.dev/api/people/?search=${req.params.id}`,
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = {
  getPeople,
  getPlanets,
  getStarships,
  searchPerson,
};
