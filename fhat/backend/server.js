"use strict";

// import the needed node_modules.
const express = require("express");

const morgan = require("morgan");

var cors = require("cors");

// import handler functions
const {
  getPeople,
  getPlanets,
  getStarships,
  searchPerson,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  .use(cors())
  .enable("trust proxy")

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  //
  // get the people
  .get("/getpeople", getPeople)

  //get the list of planets
  .get("/getplanets", getPlanets)

  // // Get the starships
  .get("/getstarships", getStarships)

  // // Search for a person
  .get("/searchperson/:id", searchPerson)

  //
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "These are not the droids you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
