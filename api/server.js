const express = require("express");
const cors = require("cors");

const projectsRouter = require("./projects/router");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/projects", projectsRouter);

module.exports = server;
