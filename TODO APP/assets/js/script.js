document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-button");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const toast = document.getElementById("toast"); 
  
    addButton.addEventListener("click", () => {
      const todoText = todoInput.value.trim();
  
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
  
        const todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
  
        deleteButton.addEventListener("click", () => {
          todoItem.remove();
          showToast("Görev başarıyla silindi!");
        });
  
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
  
        todoInput.value = "";
      }
    });
  
    function showToast(message) {
      toast.textContent = message; 
      toast.classList.add("show");
  
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  });