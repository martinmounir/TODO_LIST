import TODoList from "./todolist.js";

import ToDoItem from "./todoitem.js";

const toDoList = new TODoList();

// LAUNCH APP
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // ADD LISTENERS
  // PROCEDURAL
  // LOAD LIST OBJECT

  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  // renderList();
  // clearItemEntryField();
  // setFocusItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;

  while (child) {
    parentElement.rempveChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "item";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = item.getId();
  check.tabIndex = 0;

  // ADDCLICKLISTNERTOCHECKBOX(CHECK);

  const label = document.createElement("label");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  const container = document.getElementById("listItems");
  container.appendChild(div);
};