  const addBtn = document.querySelector('#add-btn');
  const numList = document.querySelector('#num-list');
  const ul = document.querySelector('#list');
  const numInput = document.querySelector('#num-input');
  const clearAll = document.querySelector('#clear-btn');


   
  
  function addNew () {
    if((numInput.value.trim()) === ''){
      return;
    }
    numInput.value = Number(numInput.value);
    let delBtn = document.createElement('button');
    const li = document.createElement('li');
    delBtn.innerHTML = "Delete";
    li.innerHTML = numInput.value + ' ';
    ul.appendChild(li);
    li.appendChild(delBtn);
    
    
    numInput.value = '';
    delBtn.classList.add('del-btn');
    delBtn.addEventListener('click', function delInput(){
      li.remove();
    })

    clearAll.addEventListener('click', function clearAll(){
      ul.remove();
    })
  }
  
    
  addBtn.addEventListener('click', addNew);












