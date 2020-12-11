let numberDrawn = []
let results = document.getElementById('results')

function generateNumbers() {

    for (let i=0; i<6; i++) {
        numberDrawn.push(Math.floor(Math.random() * 60))
    }

    numberDrawn.sort((a, b) => a - b)

    updateScren()
}

function updateScren() {
    let results = document.getElementById('results')
    results.innerHTML = ""
    numberDrawn.forEach( item => {
        let divNumber = document.createElement('div')
        let textDivNumber = document.createTextNode(item.toString())
        divNumber.setAttribute('class', 'number')
        divNumber.appendChild(textDivNumber)
        results.appendChild(divNumber)
        console.log(divNumber)
    })
    numberDrawn = []
}