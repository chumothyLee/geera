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

	var taskName = document.getElementById("InputTaskName1").value;


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


	button.addEventListener("click", function(event) {
		event.preventDefault();
		moveToCurrSprint(taskName);
	});

	secondDiv.appendChild(secBadgeSpan);
	secondDiv.appendChild(button);

	li.appendChild(firstDiv);
	li.appendChild(secondDiv);


	li.addEventListener("click", function(event) {
		event.preventDefault();
		showTaskDetail(taskName);
	});

	li.id = taskName;

	ul.appendChild(li);

}

function moveToCurrSprint(taskName) {
	var ul = document.getElementById("curr-sprint-tasklist");
	var li = document.createElement("li");
	var firstDiv  = document.createElement("div");
	var secondDiv = document.createElement("div");
	var firstBadgeSpan = document.createElement("span");
	var secBadgeSpan   = document.createElement("span");
	var button  = document.createElement("button")
	var icon    = document.createElement("i");

	document.getElementById(taskName).parentNode.removeChild(document.getElementById(taskName));


	li.className = "list-group-item d-flex justify-content-between align-items-center";

	// Setup firstDiv
	firstDiv.appendChild(document.createTextNode(taskName));
	firstBadgeSpan.className = "badge badge-danger badge-pill ml-3";
	firstBadgeSpan.appendChild(document.createTextNode("To-Do"));
	firstDiv.appendChild(firstBadgeSpan);

	// Setup secDiv
	secBadgeSpan.className = "badge badge-pill badge-secondary mr-3";
	secBadgeSpan.appendChild(document.createTextNode(taskInfoDict[taskName].estimate));
	button.setAttribute("type", "button");
	button.className = "btn btn-outline-primary btn-sm";
	icon.className = "fas fa-sort-amount-down";
	button.appendChild(icon);


	button.addEventListener("click", function(event) {
		event.preventDefault();
		moveToBacklog(taskName);
	});

	secondDiv.appendChild(secBadgeSpan);
	secondDiv.appendChild(button);

	li.appendChild(firstDiv);
	li.appendChild(secondDiv);


	li.addEventListener("click", function(event) {
		event.preventDefault();
		showTaskDetail(taskName);
	});

	li.id = taskName;

	ul.appendChild(li);
}


function moveToBacklog(taskName) {
	var ul = document.getElementById("backlog-tasklist");
	var li = document.createElement("li");
	var firstDiv  = document.createElement("div");
	var secondDiv = document.createElement("div");
	var firstBadgeSpan = document.createElement("span");
	var secBadgeSpan   = document.createElement("span");
	var button  = document.createElement("button")
	var icon    = document.createElement("i");

	document.getElementById(taskName).parentNode.removeChild(document.getElementById(taskName));



	li.className = "list-group-item d-flex justify-content-between align-items-center";

	// Setup firstDiv
	firstDiv.appendChild(document.createTextNode(taskName));

	// Setup secDiv
	secBadgeSpan.className = "badge badge-pill badge-secondary mr-3";
	secBadgeSpan.appendChild(document.createTextNode(taskInfoDict[taskName].estimate));
	button.setAttribute("type", "button");
	button.className = "btn btn-outline-primary btn-sm";
	icon.className = "fas fa-sort-amount-up";
	button.appendChild(icon);


	button.addEventListener("click", function(event) {
		event.preventDefault();
		moveToCurrSprint(taskName);
	});

	secondDiv.appendChild(secBadgeSpan);
	secondDiv.appendChild(button);

	li.appendChild(firstDiv);
	li.appendChild(secondDiv);


	li.addEventListener("click", function(event) {
		event.preventDefault();
		showTaskDetail(taskName);
	});

	li.id = taskName;

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

function addnewmember() {
	
	var name = document.getElementById("recipient-name").value;     // user input name
	var role_value = document.getElementById("selected_role");
	var role = role_value.options[role_value.selectedIndex].text;   // user input select

	var ul = document.getElementById("member-list");                // ul list

	var li = document.createElement("LI");  
	li.className = "list-group-item d-flex justify-content-between align-items-center";

	var div1 = document.createElement('div');                       // div for name
	var div2 = document.createElement('div');                       // div for role
	div2.className = "text-muted";

	var div3 = document.createElement('div');                       // div for button
	var button = document.createElement("BUTTON");
	button.className = "btn btn-outline-primary btn-sm";
	button.type = "button";

	button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#messagehistory");

    button.onclick = function() {
      document.getElementById("direct-message-title").innerHTML = name;
    }

	var i = document.createElement("I");
	i.className = "fas fa-comments";

	div1.innerHTML = name;
	div2.innerHTML = role;

	li.appendChild(div1);
	div1.appendChild(div2);

	button.appendChild(i);
	div3.appendChild(button);
	li.appendChild(div3);

	ul.appendChild(li);

}

function addmore()
{
    var contents = document.getElementById('copy').innerHTML;     // get content of a div
    var item = document.createElement('div');                     // create div element
    item.className = "form-row align-items-center";               // define the class of the div
    item.innerHTML = contents;
    document.getElementById('add').appendChild(item);
}

function sendmessage()
{
  var message = document.getElementById("message-text-1").value;
  var item = document.createElement("p");  // create <p> element
  item.innerHTML = message;
  document.getElementById("message-content").appendChild(item);
  document.getElementById("message-text-1").value = "";
}

function setupPage () {

	document.getElementById("new-member-form").addEventListener("submit", function(event){
      event.preventDefault();
      $('#newmember').modal('toggle');
      addnewmember();
      document.getElementById("recipient-name").value="";
      document.getElementById("selected_role").selectedIndex = 0;
    });

	taskInfoDict = {};

	document.getElementById("new-task-form").addEventListener("submit", function(event){
	    event.preventDefault();
	    $('#newTaskModal').modal('hide');
	    createTask();
	    saveTask();
	   	clearNewTaskForm();
	});

	document.getElementById("message-form").addEventListener("submit", function(event){
      event.preventDefault();
      sendmessage();
    });

};




