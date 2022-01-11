class ToyBox {
    constructor(id, name, breed) {
        this.id = id
        this.name = name
        this.photo = photo
    }

    renderToyBox(){
        const dogListing = document.createElement("div")
        dogListing.setAttribute("id", `dog-$${this.id}`)
        const dogName = document.createElement("h2")
        dogName.innerText = ${this.name}
        const dogBreed = document.createElement("h4")
        dogBreed.innerText = ${this.breed}

        dogDiv.appendChild(dogListing)
        dogListing.appendChild(dogName)
        dogListing.appendChild(dogBreed)
    }
}
