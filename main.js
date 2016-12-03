console.log("Good morning, Sunshine!");

var input = document.querySelector('input');
var listTodos = document.querySelector('.todos');

var keyPress = function(event) {
  if (event.keyCode === 13) {
  console.log('keyCode', event.keyCode);
  var val = event.target.value;
  var node = document.createElement('li');
  var listItem = document.createTextNode(val);
  listTodos.appendChild(node);
  node.appendChild(listItem);
  event.target.value = '';
}
};





input.addEventListener('keydown',keyPress);
