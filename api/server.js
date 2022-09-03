const express = require("express");
const cors = require("cors");

require("dotenv").config();

const projectsRouter = require("./projects/router");
const authRouter = require("./auth/router");
const workOrderRouter = require("./work-order/router");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/projects", projectsRouter);
server.use("/api/auth", authRouter);
server.use("/api/work-order", workOrderRouter);

module.exports = server;
