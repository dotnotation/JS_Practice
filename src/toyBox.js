class ToyBox {
    constructor({id, name, photo}) {
        this.id = id
        this.name = name
        this.photo = photo
    }

    renderToyBox(){
        const toyBoxContainer = document.getElementById("toy-box-list")
        const toyBoxDiv = document.createElement("div")
        toyBoxDiv.setAttribute("id", `toy-box-${this.id}`)
        const toyBoxPhoto = document.createElement("img")
        toyBoxPhoto.src = this.photo
        const toyBoxName = document.createElement("h2")
        toyBoxName.innerText = this.name
        const counter = document.createElement("p")
        counter.innerText = 0
        const likeButton = document.createElement("btn")
        likeButton.innerText = "Like"
        likeButton.addEventListener("click", this.listenEvents)

        toyBoxContainer.appendChild(toyBoxDiv)
        toyBoxDiv.appendChild(toyBoxPhoto)
        toyBoxDiv.appendChild(toyBoxName)
        toyBoxDiv.appendChild(counter)
        toyBoxDiv.appendChild(likeButton)
    }

    listenEvents(e){
        e.preventDefault()
        console.log(e.target.parentElement.children)
        const count = e.target.parentElement.children[2]
        count.innerHTML = parseInt(count.innerHTML, 10) + 1
    }
}
