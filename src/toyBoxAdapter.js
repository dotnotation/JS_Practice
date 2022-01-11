class ToyBoxAdapter{
    constructor(baseURL){
        this.baseURL = `${baseURL}/toy_boxes`
    }

    getToyBoxes(){
        fetch(this.baseURL)
        .then(r => r.json())
        .then(toyBoxes =>
            toyBoxes.forEach(toyBoxes => {
                const tb = new ToyBox(toybox)
                tb.renderToyBox()
            }))
    }
}