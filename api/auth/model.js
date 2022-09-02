const db = require("../../data/dbConfig");

const getAdmin = () => {
  return db("admin");
};

const createAdmin = (admin) => {
  return db("admin").insert(admin);
};

module.exports = { getAdmin, createAdmin };
