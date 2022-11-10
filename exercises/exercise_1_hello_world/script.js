console.log('Hello, World');

let header = document.createElement("h1");
header.innerText = "Hello, World";

let paragraph = document.createElement("p");
paragraph.innerText = "These HTML elements do not exist in the HTML file, they were created by the JavaScript script"

let list = document.createElement("ul");
list.innerText="How is this useful?"

const list_items = ["We can make a website dynamic." , "We can display user data from backend.", "It's cool."];

document.body.appendChild(header);
document.body.appendChild(paragraph);


for (i = 0; i < list_items.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = list_items[i];
    list.appendChild(li);
}

document.body.appendChild(list);