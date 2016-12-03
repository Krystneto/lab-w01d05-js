console.log("Good morning, Sunshine!");

var input = document.querySelector('input');
var listTodos = document.querySelector('.todos');


var keyPress = function(event) {
  if (event.keyCode === 13) {
  console.log('keyCode', event.keyCode);
  var val = event.target.value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(val);
  listTodos.appendChild(li);
  li.appendChild(textNode);
  event.target.value = '';
  var qli = document.querySelector('li');
  qli.classList.add("todo");
  var liSpan = document.createElement('span')
  liSpan.classList.add("remove");
  document.querySelector('remove').textContent = 'X';

  li.appendChild(liSpan);
  }
};





input.addEventListener('keydown',keyPress);
