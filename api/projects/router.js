const express = require("express");
const multer = require("multer");
const { getProjects, createProject } = require("./model");

const router = express.Router();
const upload = multer();

router.get("/", (req, res) => {
  getProjects().then((projects) => {
    res.json(projects);
  });
});

router.post("/", upload.single("image"), (req, res) => {
  const newProject = {
    project_name: req.body.project_name,
    technologies_used: req.body.technologies_used,
    project_screenshot: `data:image/png;base64,${req.file.buffer.toString(
      "base64"
    )}`,
  };

  createProject(newProject).then((newProject) => {
    res.status(201).json(newProject);
  });
});

module.exports = router;
