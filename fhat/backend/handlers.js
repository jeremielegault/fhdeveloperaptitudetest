"use strict";

require("dotenv").config();

var axios = require("axios");

const request = require("request-promise");

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

// Takes in the lat and lon and returns a variety of restaurants and bars closeby
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

module.exports = {
  getPeople,
};
