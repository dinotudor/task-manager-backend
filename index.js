'use-strict';

const express = require('express');

const app = express();

const projects = [
  {
    id: '1',
    title: 'Test',
    tasks: []
  },
  {
    id: '2',
    title: 'More tests',
    tasks: []
  },
  {
    id: '3',
    title: 'Even more tests',
    tasks: []
  }
];

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.listen(3100);

/*
- POST "/projects" - { id: "1", title: "New Project", tasks: [] };
- GET "/projects" - list all projects and all tasks;
- PUT "/projects/:id" - edit **Title** in project with given Id;
- DELETE "/projects/:id" - delete project with given Id;
- POST "/projects/:id/tasks" - given **title** and **id** of a project, store a new task inside tasks array
*/
