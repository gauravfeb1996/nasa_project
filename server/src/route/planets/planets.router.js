const express = require("express");
const { planets } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', planets);

module.exports = planetsRouter;