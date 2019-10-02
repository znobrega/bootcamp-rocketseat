const express = require("express");

const server = express();

server.use(express.json());
server.use(incrementRequest);

let numberOfRequests = 0;
let projects = [];

function idExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);
  if (!project) {
    return res.status(400).json({ error: "id not found" });
  }

  return next();
}

function incrementRequest(req, res, next) {
  console.log(++numberOfRequests);

  next();
}

server.get("/projects", (req, res) => {
  console.log(req.query.name);

  return res.json(projects);
});

server.post("/projects", (req, res) => {
  projects.push({
    id: req.body.id.toString(),
    title: req.body.title.toString(),
    tasks: []
  });
  return res.status(200).json({ result: "ok" });
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;

  projects = projects.map(project => {
    if (project.id == id) project.title = req.body.title;
  });

  return res.json(projects);
});

server.delete("/projects/:id", idExists, (req, res) => {
  projects = projects.filter(project => project.id != req.params.id);

  return res.json(projects);
});

server.post("/projects/:id/tasks", idExists, (req, res) => {
  projects = projects.map(project => {
    if (project.id == req.params.id) {
      project.tasks.push(req.body.title);
    }
  });

  return res.json(projects);
});

server.listen(3001, err => {
  console.log("Server running");
});
