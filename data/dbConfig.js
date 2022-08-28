const knex = require("knex");

const configs = require("../knexfile");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = knex(configs[NODE_ENV]);
