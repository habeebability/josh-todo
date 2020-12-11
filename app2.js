  const addBtn = document.querySelector('#add-btn');
  const numList = document.querySelector('#num-list');
  const ul = document.querySelector('#list');
  const numInput = document.querySelector('#num-input');
  
  
  
  
  function addNew () {
    if(numInput.value.trim() === ''){
      return;
    }

    let delBtn = document.createElement('button');
    const li = document.createElement('li');
    delBtn.innerHTML = "Delete";
    li.innerHTML = numInput.value + ' ';
    ul.appendChild(li);
    li.appendChild(delBtn);
    
    
    numInput.value = '';
    
    delBtn.addEventListener('click', function delInput(){
      li.remove();
    })
  }
  
    
  addBtn.addEventListener('click', addNew);












