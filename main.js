console.log("Good morning, Sunshine!");

var input = document.querySelector('input');
var listTodos = document.querySelector('.todos');


var handleKeyPress = function(event) {
  if (event.keyCode === 13) {
  console.log('keyCode', event.keyCode);
  var val = event.target.value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(val);
  listTodos.appendChild(li);
  li.appendChild(textNode);
  li.className = "todo";
  var liSpan = document.createElement('span')
  liSpan.classList.add('remove');
  li.appendChild(liSpan);
  liSpan.textContent = " X";
  event.target.value = '';
  }
};


var handleRemoveX = function(event) {
  console.log("event.target.value", event.target);
  var removeX = document.querySelector('.remove');
  removeX.textContent = '';
};

var handleComplete = function(event) {
  console.log('event.target', event.target);

};

input.addEventListener('keydown', handleKeyPress);

listTodos.addEventListener('click', handleRemoveX);

// listTodos.addEventListener('click', handleComplete);








