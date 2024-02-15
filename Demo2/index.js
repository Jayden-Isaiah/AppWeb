const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

var task = "Task";
var i =0 ;

const listItem = document.createElement("li");

addTaskBtn.addEventListener("click", addTask);


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";

      //   Création du bouton de suppression
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
      
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("completed");
        });

        listItem.addEventListener("dblclick", () => {
            const newText = prompt("Modifier la tâche :", listItem.textContent);
            if (newText !== null && newText !== "") {
                listItem.textContent = newText;
            }
            btDelete();
        });
    } else {
        alert("Veuillez entrer une tâche valide.");
    }

    function btDelete(){

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Supprimer";
      listItem.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
      listItem.remove();
      });
   
   }
      // localStorage.setItem(task.concat(i), taskText);
      // i++;
}


      function w3_open() {
         document.getElementById("mySidebar").style.display = "block";
      }
      
      function w3_close() {
         document.getElementById("mySidebar").style.display = "none";
      }