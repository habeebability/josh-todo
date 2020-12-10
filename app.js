const numInput = document.querySelector('#num-input');
const numField = document.querySelector('#nums-field')
const addButton = document.getElementById('add-btn');
const clearBtn = document.querySelector('#clear-btn');
const nums = document.querySelector('#nums');

function addNum() {
  let userNum = Number(numInput.value);
  nums.textContent += userNum + ' ';

  numInput.value = '';
  numField.focus();
}
function clearNum() {
  nums.innerHTML = '';
}
addButton.addEventListener('click', addNum);
clearBtn.addEventListener('click', clearNum);





