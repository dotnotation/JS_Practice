import "./styles.css";
import { Dog } from "./dog"; // dog class
import { dogs } from "../public/data"; // array of dog objects

const dogDiv = document.querySelector(".dogList"); // grab div

const addDogs = () => {
  // loop over array of dogs
  for (const dogData of dogs) {
    const { id, name, breed, knownFor } = dogData;
    const dog = new Dog(id, name, breed, knownFor); // create dog objects
    Dog.all.push(dog); // add to Dog.all
    dogDiv.insertAdjacentHTML("beforeend", dog.renderDog());
  }
};

addDogs(); // invoke function

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