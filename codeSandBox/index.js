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
    dogDiv.addEventListener("click", dog.handleEvent);
    console.log(dog.name);
    values.push(dog.breed);
    console.log(values);
    //Dog.all.addSelectOptions(dog);
  }
  console.log(values);
  addDropDown(values);
};

addDogs(); // invoke function

function addDropDown(values) {
  console.log("hit drop down", values);
  const header = document.getElementById("app");
  const menu = document.createElement("select");

  menu.setAttribute("id", ".dog-filter");
  let unique = values.filter((item, i, ar) => ar.indexOf(item) === i);
  console.log(unique);
  unique.forEach((breed) => {
    let option = document.createElement("option");
    option.value = breed;
    option.text = breed;
    menu.appendChild(option);
  });

  const filterBtn = document.createElement("btn");
  filterBtn.innerText = "Filter By Breed";
  filterBtn.addEventListener("click", filterBreed)

  header.append(menu);
  header.append(filterBtn);
}

function filterBreed(e) {
  e.preventDefault();
  const form = document.getElementById(".dog-filter");
  const selection = form.value;
  const filter = { breed: selection };
  const dogBreed = Dog.all;
  const filteredDogs = dogBreed.filter(function (item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] !== filter[key]) return false;
    }
    return true;
  });
  console.log(filteredDogs);
  Dog.renderDog(filteredDogs);//currently doesn't work
  // const filteredDog = new Dog(filtered)
  // console.log(filteredDog)
  // dogDiv.innerHTML = ""
  // filteredDog.renderDog()
}

//addDropDown();

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
