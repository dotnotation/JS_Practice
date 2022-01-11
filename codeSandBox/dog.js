export class Dog {
    constructor(id, name, breed, knownFor) {
      this.id = id;
      this.name = name;
      this.breed = breed;
      this.knownFor = knownFor;
    }
  
    renderDog() {
      return `
        <div class="dog-card">
          <p>Name: ${this.name}</p>
          <p>Breed: ${this.breed}</p> 
          <p>Known For: ${this.knownFor}</p>
          <p>0</p>
          <button class="like">Like</button>
        </div>
        `;
    }
  
    listenEvent() {
      const likeBtn = document.getElementsByClassName("like");
      console.log(likeBtn);
      likeBtn.addEventListener("click", this.handleEvent);
    }
  
    handleEvent(e) {
      e.preventDefault();
      debugger;
      console.log(e.target.parentElement);
    }
  }
  
  Dog.all = [];