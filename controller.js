// @ts-nocheck
const input = document.querySelector("#addtask");
const addBtn = document.querySelector("#addbtn");
const addtasklist = document.querySelector("#tasklist");
const completetask = document.querySelector("#completTask");
const compledlist = document.querySelector("#completedlist");
const showcompltBtn = document.querySelector("#taskDone");
const list = document.querySelector("#listTask");

let id = 0; // compteur d’ID
const taches = []; // tableau de tâches

addBtn.addEventListener("click", () => {
  if (input.classList.contains("hidden")) {
    // 1er clic : afficher l’input
    input.classList.remove("hidden");
    input.focus();
  } else {
    // 2e clic : ajouter la tâche
    if (input.value.trim() === "") return;

    const nouvelleTache = {
      id: id++,
      title: input.value,
      completed: false,
    };

    taches.push(nouvelleTache);
    input.value = "";
    input.classList.add("hidden");

    renderTask();
  }
});
showcompltBtn.addEventListener("click", () => {
  completetask.toggleAttribute("hidden");
});

function renderTask() {
  addtasklist.innerHTML = "";
  completedlist.innerHTML = "";

  taches.forEach((task) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTask();
    });

    const span = document.createElement("span");
    span.textContent = task.title;

    li.appendChild(checkbox);
    li.appendChild(span);

    if (task.completed) {
      completedlist.appendChild(li);
    } else {
      addtasklist.appendChild(li);
    }
  });

  list.hidden = !taches.some((t) => !t.completed);
  completetask.hidden = !taches.some((t) => t.completed);
}
