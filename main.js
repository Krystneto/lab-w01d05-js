console.log("Good morning, Sunshine!");

var input = document.querySelector('input');
var listTodos = document.querySelector('.todos');
var listItems = document.querySelector('.todo');
// create a function to create a list item and add to list
var handleKeyPress = function(event) {
  // listen for Enter key
  if (event.keyCode === 13) {
  console.log('keyCode', event.keyCode);
 // set the target value to a var val
  var val = event.target.value;
  // creates a list item and saves to var li
  var li = document.createElement('li');
  // create textNode and save to var textNode
  var textNode = document.createTextNode(val);
  // append li and textNode to listTodos
  listTodos.appendChild(li);
  li.appendChild(textNode);
  // create class name 'todo' for list item
  li.className = "todo";
  // create element 'span'
  var liSpan = document.createElement('span')
  // add class 'remove' to liSpan
  liSpan.classList.add('remove');
  // append liSpan to li
  li.appendChild(liSpan);
  // adds text ' X' to liSpan
  liSpan.textContent = ' X';
  // clear the input value
  event.target.value = '';
  // add event listeners
  li.addEventListener('click', handleCompleteOn);
  liSpan.addEventListener('click', handleRemoveX)
  }
};

// create function to remove the X from the list item
var handleRemoveX = function(event) {
console.log(this.parentNode);
this.parentNode.remove(this.parentNode);
};


// create function to add class 'complete' to list item
var handleCompleteOn = function(event) {
  this.classList.toggle("complete");
};


// create event listener for keydown and click
input.addEventListener('keydown', handleKeyPress);











