console.log('Hello World');

// Create a new li to go in the nav
var li = document.createElement('li');

// Give it a class name
li.classList.add('last');

// Change its CSS
li.style.backgroundColor = 'pink';

console.log(li);

// Create an anchor link to go in the new li
var a = document.createElement('a');

// Give is some text
a.textContent = "Four";

a.style.color = 'white';

console.log(a);

// Insert the anchor link into the li
li.appendChild(a);

console.log(li);

var uls = document.getElementsByTagName('ul');

var ul = uls[0];

console.log(ul);

// Insert the new li element into our ul
ul.appendChild(li);