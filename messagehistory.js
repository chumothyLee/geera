function sendmessage()
{
    var message = document.getElementById("message-text").value;
    var item = document.createElement("p");  // create <p> element
    item.innerHTML = message;
    document.getElementById("content").appendChild(item);
    document.getElementById("message-text").value = "";
} 
var person = {
    first_name: "Tiffany",
    last_name:  "Huang",
    first: "Hello, how are you?",
    second: "I'm good, you?",
    full_name: function() {
        return this.first_name + " " + this.last_name;
    },
    message_one: function() {
        return this.first;
    },
    message_two: function() {
        return this.second;
    }
};
document.getElementById('title').innerHTML = person.full_name();
document.getElementById('first-message').innerHTML = person.message_one();
document.getElementById('second-message').innerHTML = person.message_two();
