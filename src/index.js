const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")


document.addEventListener("DOMContentLoaded", () => {
  toyBoxAdapter.getToyBoxes()
})

// function addDropDown(){
//  debugger
//   var values = ["dog", "cat", "parrot", "rabbit"];

//   var select = document.createElement("select");
//   select.name = "pets";
//   select.id = "pets"

//   for (const val of values)
//   {
//       var option = document.createElement("option");
//       option.value = val;
//       option.text = val.charAt(0).toUpperCase() + val.slice(1);
//       select.appendChild(option);
//   }

//   var label = document.createElement("label");
//   label.innerHTML = "Choose your pets: "
//   label.htmlFor = "pets";

//   document.getElementById("header").appendChild(label).appendChild(select);
// }





