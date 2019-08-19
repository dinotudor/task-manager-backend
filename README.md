# Task Manager Backend

### Node.JS

#### ROUTES

- POST "/projects" - { id: "1", title: "New Project", tasks: [] };
- GET "/projects" - list all projects and all tasks;
- PUT "/projects/:id" - edit **Title** in project with given Id;
- DELETE "/projects/:id" - delete project with given Id;
- POST "/projects/:id/tasks" - given **title** and **id** of a project, store a new task inside tasks array

#### Middlewares
