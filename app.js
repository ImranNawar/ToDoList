// **  DATE AND TIME ** //
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${(date.getFullYear(), 2023)}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

//** Events **//
let global = {};
window.onload = function () {
  let inp = document.getElementById("inp");
  let box3 = document.getElementById("box3");
  let btn = document.getElementById("btn");
  let todolist = JSON.parse(localStorage.getItem("todolist")) || [];
  global.todolist = todolist;
  display();

  btn.onclick = function () {
    let task = {
      task: inp.value,
      done: false,
    };
    global.todolist.push(task);

    localStorage.setItem("todolist", JSON.stringify(global.todolist));
    display();
  };
  function display() {
    let finallist = " ";
    for (let i = 0; i < global.todolist.length; i++) {
      finallist += `<li class="list"><span><input onclick="toggle(this)" id="i${i}" type="checkbox" ></span>
                          <span id="${i}">${global.todolist[i].task}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          <button id="b${i}" onclick="deleteEL(this)"class="t-btn">DELETE</button></li>`;
    }

    box3.innerHTML = " ";
    box3.innerHTML = finallist;
    for (let i = 0; i < global.todolist.length; i++) {
      let checked = global.todolist[i].done;

      strikeOff(checked, i);
    }
    document.getElementById("inp").placeholder = "Enter Your Task Here... ";
  }
  window.display = display;
};

global.todolist = JSON.parse(localStorage.getItem("todolist"));

function toggle(e1) {
  let id = e1.id.substr(1);

  global.todolist[id].done = !global.todolist[id].done;
  let checked = global.todolist[id].done;

  strikeOff(checked, id);
  localStorage.setItem("todolist", JSON.stringify(global.todolist));
}
function strikeOff(check, id) {
  let e1 = document.getElementById(id);
  let c = `i${id}`;
  let checkbox = document.getElementById(c);
  if (check) {
    e1.style.textDecoration = "line-through";
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
    e1.style.textDecoration = "none";
  }
}

function deleteEL(el) {
  let id = el.id.substr(1);
  global.todolist.splice(id, 1);
  localStorage.setItem("todolist", JSON.stringify(global.todolist));
  display();
}
