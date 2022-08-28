const db = require("../../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const createProject = async (project) => {
  const id = await db("projects").insert(project);
  const [newProject] = await db("projects").where("id", id);
  return newProject;
};

module.exports = {
  getProjects,
  createProject,
};
