class ToyBoxAdapter{
    constructor(baseURL){
        this.baseURL = `${baseURL}/toy_boxes`
    }

    getToyBoxes(){
        fetch(this.baseURL)
        .then(r => r.json())
        .then(toyBoxes => {
            let values = []
            toyBoxes.forEach(toyBox => {
                const tb = new ToyBox(toyBox)
                // console.log(toyBox.name)
                tb.renderToyBox()
                values.push(toyBox.name)
                //tb.addDropDown(values)
            })
            ToyBox.addDropDown(values)
        })
        .catch(error => console.error(error))
    }
}