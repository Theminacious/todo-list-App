let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
      item: 'Buy Milk',
      dueDate: '6/1/2024'
    },
    {
      item: 'Go to college',
      dueDate: '6/1/2024'
    }
  ];
  
  displayItems();
  
  function addTODO() {
    let inputElement = document.querySelector('#input-text');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    saveToLocalStorage();
    displayItems();
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todo-Container');
  
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let { item, dueDate } = todoList[i];
  
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="deleteTodo(${i}); saveToLocalStorage(); displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }
  
  function deleteTodo(index) {
    todoList.splice(index, 1);
  }
  
  function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }