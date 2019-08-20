# Task Manager Backend

### Node.JS

_CRUD_ operations

#### ROUTES

- POST "/projects" - create new project with unique Id in this format: { id: "1", title: "New Project", tasks: [] };
- GET "/projects" - list all projects and all tasks;
- PUT "/projects/:id" - edit **Title** in project with given Id;
- DELETE "/projects/:id" - delete project with given Id;
- POST "/projects/:id/tasks" - given **title** and **id** of a project, store a new task inside tasks array

#### Middlewares

- Check if user exists by its ID
- Keep track of number of requests made and console log them

#####

_scripts_

yarn dev - nodemon index.js
