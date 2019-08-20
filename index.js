"use-strict";
const express = require("express");
const app = express();

app.use(express.json());

const allProjects = [
  {
    id: 1,
    title: "Test",
    task: []
  },
  {
    id: 2,
    title: "More test",
    task: []
  },
  {
    id: 3,
    title: "Even more tests : )",
    task: []
  }
];

//GET - list all projects
app.get("/projects", (req, res) => {
  res.json(allProjects);
});

//POST - create new project
app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  allProjects.push(project);

  return res.json(allProjects);
});

//PUT - edit title one project
app.put("/projects/:id", () => {});

app.listen(3100);

/*
- POST "/projects" - { id: "1", title: "New Project", tasks: [] };
- GET "/projects" - list all projects and all tasks;
- PUT "/projects/:id" - edit **Title** in project with given Id;
- DELETE "/projects/:id" - delete project with given Id;
- POST "/projects/:id/tasks" - given **title** and **id** of a project, store a new task inside tasks array
*/
