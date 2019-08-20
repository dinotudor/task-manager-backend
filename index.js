'use-strict';
const express = require('express');
const app = express();

app.use(express.json());

let reqCount = 0;
const allProjects = [
  {
    id: 1,
    title: 'Test',
    tasks: []
  },
  {
    id: 2,
    title: 'More test',
    tasks: []
  },
  {
    id: 3,
    title: 'Even more tests : )',
    tasks: []
  }
];

//Middleware count log requests
function countRequests(req, res, next) {
  reqCount++;
  console.log(`${reqCount} requests so far`);
  return next();
}
app.use(countRequests);

//Middleware to check if project extists by its Id
function checkUserId(req, res, next) {
  const { id } = req.params;
  const project = allProjects.find(one => one.id == id);
  if (!project) {
    return res.status(400).json({ message: 'No matching project found' });
  }
  return next();
}

//GET - list all projects
app.get('/projects', (req, res) => {
  res.json(allProjects);
});

//POST - create new project
app.post('/projects', (req, res) => {
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
app.put('/projects/:id', checkUserId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = allProjects.find(one => one.id == id);
  project.title = title;
  return res.json(allProjects);
});

//DELETE - delete one project by its Id
app.delete('/projects/:id', checkUserId, (req, res) => {
  const { id } = req.params;
  const index = allProjects.findIndex(i => i.id == id);
  allProjects.splice(index, 1);
  return res.json(allProjects);
});

//POST - add new task to a project by its Id
app.post('/projects/:id', checkUserId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = allProjects.find(one => one.id == id);
  project.tasks.push(title);
  return res.json(allProjects);
});

app.listen(3100);
