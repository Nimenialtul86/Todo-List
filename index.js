let list = document.querySelector(".list");
let addItem = document.querySelector(".add-item");

function addTask() {
  let li = document.createElement("li");
      if(addItem.value === "") {
        alert("Enter a task");
      } else {
        li.innerHTML = addItem.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times";
        span.classList.add("deleteTask")
        li.appendChild(span);
      }
      addItem.value = "";
      saveData();
    }

list.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}

showTask();




