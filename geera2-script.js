

// MODELS ---------------------------------------------------------------------

var projects = {};
var tasks    = {};
var users    = {};

// MODEL FUNCS ----------------------------------------------------------------

// PROJS --------------------------------------------------

function createProject ( nameIn,
						 toDosIn,
						 inProgIn,
						 doneIn,
						 backlogIn,
						 teamIn ) {

	var project = { name    : nameIn,
					toDos   : toDosIn,
				    inProg  : inProgIn,
				    done    : doneIn,
				    backlog : backlogIn,
				    team    : teamIn };

	projects[nameIn] = project;

}

// TASKS --------------------------------------------------

function createTask ( nameIn,
					  assigneeIn,
					  estimateIn,
					  summaryIn,
					  descIn,
					  reqsIn ) {

	var task = { name     : nameIn,
				 assignee : assigneeIn,
				 estimate : estimateIn,
				 summary  : summaryIn,
				 desc     : descIn,
				 reqs     : reqsIn };

	tasks[nameIn] = task;

}

// USERS --------------------------------------------------

function createUser ( nameIn,
					  roleIn ) {

	var user = { name : nameIn,
				 role : roleIn }

	users[nameIn] = user;

}

// MVC FUNCS ------------------------------------------------------------------

// TASK FORM ----------------------------------------------

function submitTaskForm () {

	var taskName     = document.getElementById("InputTaskName1").value;
	var taskAssignee = document.getElementById("Assignee1").value;
	var taskEstimate = document.getElementById("StoryPointEstimate1").value;
	var taskSummary  = document.getElementById("SummaryText1").value;
	var taskDesc     = document.getElementById("DescriptionText1").value;
	var taskReqs     = document. getElementById("RequirementsText1").value;

	createTask(taskName,
		       taskAssignee,
		       taskEstimate,
		       taskSummary,
		       taskDesc,
		       taskReqs);
}

function moveTask ( from, 
	          		to, 
	          		taskName) {

	switch (to) {
		case "back":
			
			break;
		
		case "todo":

			break;

		case "prog":

			break;

		case "done":

			break;
	}

	switch (from) {
		case "back":

			break;
		
		case "todo":

			break;

		case "prog":

			break;

		case "done":

			break;
	}

}







































