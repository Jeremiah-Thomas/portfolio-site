const express = require("express");
const cors = require("cors");

require("dotenv").config();

const projectsRouter = require("./projects/router");
const authRouter = require("./auth/router");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/projects", projectsRouter);
server.use("/api/auth", authRouter);

module.exports = server;
