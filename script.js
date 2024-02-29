function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = '<span>' + taskInput.value + '</span><button onclick="editTask(this)">Editar</button><button onclick="deleteTask(this)">Borrar</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function editTask(element) {
    var newValue = prompt("Editar tarea:", element.previousElementSibling.textContent);
    if (newValue !== null) {
      element.previousElementSibling.textContent = newValue;
    }
  }
  
  function deleteTask(element) {
    element.parentNode.remove();
  }
  