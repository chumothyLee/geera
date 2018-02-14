var taskInfoDict = {};

function createTask () {

	var ul = document.getElementById("backlog-tasklist");
	var li = document.createElement("li");
	var firstDiv  = document.createElement("div");
	var secondDiv = document.createElement("div");
	var firstBadgeSpan = document.createElement("span");
	var secBadgeSpan   = document.createElement("span");
	var button  = document.createElement("button")
	var icon    = document.createElement("i");

	li.className = "list-group-item d-flex justify-content-between align-items-center";

	// Setup firstDiv
	firstDiv.appendChild(document.createTextNode(document.getElementById("InputTaskName1").value));

	// Setup secDiv
	secBadgeSpan.className = "badge badge-pill badge-secondary mr-3";
	secBadgeSpan.appendChild(document.createTextNode(document.getElementById("StoryPointEstimate1").value));
	button.setAttribute("type", "button");
	button.className = "btn btn-outline-primary btn-sm";
	icon.className = "fas fa-sort-amount-up";
	button.appendChild(icon);
	secondDiv.appendChild(secBadgeSpan);
	secondDiv.appendChild(button);

	li.appendChild(firstDiv);
	li.appendChild(secondDiv);

	var taskName = document.getElementById("InputTaskName1").value;

	li.addEventListener("click", function(event) {
		event.preventDefault();
		showTaskDetail(taskName);
	});

	ul.appendChild(li);

}

function saveTask () {
	var taskName     = document.getElementById("InputTaskName1").value;
	var taskAssignee = document.getElementById("Assignee1").value;
	var taskEstimate = document.getElementById("StoryPointEstimate1").value;
	var taskSummary  = document.getElementById("SummaryText1").value;
	var taskDesc     = document.getElementById("DescriptionText1").value;
	var taskReqs     = document. getElementById("RequirementsText1").value;

	var task = { name     : taskName,
				 assignee : taskAssignee,
				 estimate : taskEstimate,
				 summary  : taskSummary,
				 desc     : taskDesc,
				 reqs     : taskReqs};

	taskInfoDict[taskName] = task

	console.log(taskInfoDict[taskName].name);
}


function clearNewTaskForm () {
	document.getElementById("InputTaskName1").value = "";
	document.getElementById("Assignee1").value = "";
	document.getElementById("StoryPointEstimate1").value = "";
	document.getElementById("SummaryText1").value = "";
	document.getElementById("DescriptionText1").value = "";
	document.getElementById("RequirementsText1").value = "";
}

function showTaskDetail (taskName) {
	var taskNameTag = document.getElementById("task-detail-name");
	var taskAssigneeTag = document.getElementById("assignee-name");
	var taskEstimateTag = document.getElementById("sp-estimate");
	var taskSummaryTag  = document.getElementById("task-summary");
	var taskDescTag = document.getElementById("task-detail");
	var taskReqTag = document.getElementById("task-reqs");
	//var taskCommTag = document.getElementById("task-comments");


	taskNameTag.innerHTML = "";
	taskAssigneeTag.innerHTML = "";
	taskEstimateTag.innerHTML = "";
	taskSummaryTag.innerHTML = "";
	taskDescTag.innerHTML = "";
	taskReqTag.innerHTML = "";
	//taskCommTag.innerHTML = "";

	taskNameTag.appendChild(document.createTextNode(taskName));
	taskAssigneeTag.appendChild(document.createTextNode(taskInfoDict[taskName].assignee));
	taskEstimateTag.appendChild(document.createTextNode(taskInfoDict[taskName].estimate));
	taskSummaryTag.appendChild(document.createTextNode(taskInfoDict[taskName].summary));
	taskDescTag.appendChild(document.createTextNode(taskInfoDict[taskName].desc));
	taskReqTag.appendChild(document.createTextNode(taskInfoDict[taskName].reqs))


}


function setupPage () {
	taskInfoDict = {};
	
	document.getElementById("new-task-form").addEventListener("submit", function(event){
	    event.preventDefault();
	    $('#newTaskModal').modal('hide');
	    createTask();
	    saveTask();
	   	clearNewTaskForm();
	})};




