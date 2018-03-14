import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const projects = generateProjects(4);


class ProjectApi {

  static getAllProjects() {
    console.log("MOCK PROJECT API - getAllProjects: ")
    console.log(projects)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    })
  }

  static saveProject(project) {
    project = Object.assign({}, project) // to avoid manipulating passed in object

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProjectNameLength = 3;
        if (project.name.length < minProjectNameLength) {
          reject(`Project Name must be at least ${minProjectNameLength} characters.`);
        }

        if (project.name) {
          const existingProjectName = projects.findIndex((p) => p.name == project.name);

          if (existingProjectName == -1) {
            reject('Project Name already exists.');
          }
        }

        projects.push(project);
        resolve(project);
      }, delay);
    });
  }

  static deleteProject(projectName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProjectToDelete = projects.findIndex((p) => {
          return p.name = projectName;
        });
        projects.splice(indexOfProjectToDelete, 1);
        resolve();
      }, delay);
    })
  }

}

export default ProjectApi;

// HELPER FUNCTIONS FOR GENERATING RANDOM TASKS AND PROJECTS

function generateProjects (numProjects) {
  const projects = [];

  for (var i = 0; i < numProjects; i++) {
    projects.push(generateProject(i));
  }

  return projects;
}

function generateProject (projectID) {

  const member1 = { name : "Sherman Lee",
                  role : "Software Engineer"};

  const member2 = { name : "Luis Llobrera",
                    role : "Software Engineer"};

  const member3 = { name : "Tiffany Huang",
                    role : "Software Engineer"};

  const member4 = { name : "Katie Lau",
                    role : "Software Engineer"};

  const member5 = { name : "Vanessa Chou",
                    role : "Software Engineer"};

  const member6 = { name : "Jeremy Siocon",
                    role : "Software Engineer"};

  const member7 = { name : "Jed Tadios",
                    role : "Product Manager"};

  const member8 = { name : "Patrick Hu",
                    role : "Product Manager"};

  const member9 = { name : "Crystal Yung",
                    role : "Scrum Master"};

  const sampleTeam = [member1, member2, member3, member4, member5, member6, member7, member8, member9];

  const sampleProject = { name  : "Sample Project " + projectID,
                          tasks : generateTasks(projectID, sampleTeam),
                          team  : sampleTeam
                        }

  return sampleProject
}

function generateTasks (projectID, team) {
  const numTasks = Math.floor(Math.random() * 25);
  const tasks    = [];

  for (var i = 0; i < numTasks; i++) {
    tasks.push(generateTask(projectID, i, team));
  }
  return tasks;
}

function generateTask (projectID, taskID, team) {
  const sampleTask = { name     : "Sample Task " + projectID + "-" + taskID,
                       status   : generateStatus(),
                       estimate : Math.floor(Math.random() * 10),
                       assignee : team[Math.floor(Math.random() * team.length)].name,
                       reqs     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                       description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 };

 return sampleTask;
}

function generateStatus () {
  switch(Math.floor(Math.random() * Math.floor(4))) {
    case 0:
      return "Back";
    case 1:
      return "To-Do";
    case 2:
      return "InProg";
    default:
      return "Done"
  }
}