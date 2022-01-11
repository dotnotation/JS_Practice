import "./styles.css";
import { Dog } from "./dog"; // dog class
import { dogs } from "../public/data"; // array of dog objects

const dogDiv = document.querySelector(".dogList"); // grab div

const addDogs = () => {
  // loop over array of dogs

  let values = [];
  for (const dogData of dogs) {
    const { id, name, breed, knownFor } = dogData;
    const dog = new Dog(id, name, breed, knownFor); // create dog objects
    Dog.all.push(dog); // add to Dog.all
    dogDiv.insertAdjacentHTML("beforeend", dog.renderDog());
    // dogDiv.addEventListener("click", dog.handleEvent);
    console.log(dog.name);
    values.push(dog.name);
    console.log(values);
  }
  console.log(values);
  addDropDown(values);
};

addDogs(); // invoke function

function addDropDown(values) {
  console.log("hit drop down", values);
  const header = document.getElementById("app");
  const menu = document.createElement("select");

  menu.setAttribute("id", "name-drop-down");
  values.forEach((name) => {
    let option = document.createElement("option");
    option.value = name;
    option.text = name;
    menu.appendChild(option);
  });

  header.append(menu);
}


// const handleEvent = () => {
//   dogDiv.addEventListener("click", (e) => {
//     console.log(e.target.parentElement.children[3]);
//     const counter = e.target.parentElement.children[3];
//     counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
//   });
// };

// function handleEvent() {
//   dogDiv.addEventListener("click", (e) => {
//     console.log(e.target.parentElement.children[3]);
//     const counter = e.target.parentElement.children[3];
//     counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
//   });
// }

// handleEvent();
// dogDiv.addEventListener("click", (e) => {
//   if (e.target.closest(".like")) {
//     const counter = e.target.previousElementSibling;
//     counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
//   }
// });