class ToyBoxAdapter{
    constructor(baseURL){
        this.baseURL = `${baseURL}/toy_boxes`
    }

    getToyBoxes(){
        fetch(this.baseURL)
        .then(r => r.json())
        .then(toyBoxes => {
            toyBoxes.forEach(toyBox => {
                const tb = new ToyBox(toyBox)
                tb.renderToyBox()
            })
        })
        .catch(error => console.error(error))
    }
}