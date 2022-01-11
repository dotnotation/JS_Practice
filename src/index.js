const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")


document.addEventListener("DOMContentLoaded", () => {
  toyBoxAdapter.getToyBoxes()
  // sorting()
})

// function sorting(){
//   //console.log("hit sorting")
//   const topDiv = document.getElementById("toy-box-list")
//   const sortBtn = document.createElement("btn")
//   sortBtn.innerText = "Sort"
//   sortBtn.addEventListener("click", handleSort)

//   topDiv.appendChild(sortBtn)
// }

// function handleSort(e){
//   console.log(e.target)
//   const menuList = document.getElementById("name-drop-down")
//   let sortList = []
 
// }






