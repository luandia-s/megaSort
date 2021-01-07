let numberDrawn = []
let btn = document.getElementById('button')
let select = document.getElementById('games')
let inputNumbers = document.getElementById('numbers-played')
let spanNumber = document.getElementById('qtdNumbers')

select.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'mega-sena':
            inputNumbers.value = '6'
            inputNumbers.setAttribute('min', '6')
            inputNumbers.setAttribute('max', '15')
            spanNumber.innerHTML = 'Escolha de 6 à 15'
            break;
        case 'quina':
            inputNumbers.value = '5'
            inputNumbers.setAttribute('min', '5')
            inputNumbers.setAttribute('max', '15')
            spanNumber.innerHTML = 'Escolha de 5 à 15'
            break;
        case 'lotofácil':
            inputNumbers.value = '15'
            inputNumbers.setAttribute('min', '15')
            inputNumbers.setAttribute('max', '18')
            spanNumber.innerHTML = 'Escolha de 15 à 18'
            break;
        case 'lotomania':
            inputNumbers.value = '50'
            inputNumbers.setAttribute('min', '50')
            inputNumbers.setAttribute('max', '50')
            break;
        default:
            break;
    }
})

const generateNumbers = () => {

    numberDrawn = []
    let input = document.getElementById('numbers-played')
    let max = input.getAttribute('max')
    let min = input.getAttribute('min')

    if (input.value >= min || input.value <= max) {
        switch (select.value) {
            case 'mega-sena':
                while (numberDrawn.length < input.value) {
                    let numeroSorteado = Math.floor(Math.random() * 60) + 1
                    if (!numberDrawn.includes(numeroSorteado)) {
                        numberDrawn.push(numeroSorteado)
                    }
                }
                break;
            case 'quina':
                while (numberDrawn.length < inputNumbers.value) {
                    let numeroSorteado = Math.floor(Math.random() * 80) + 1
                    if (!numberDrawn.includes(numeroSorteado)) {
                        numberDrawn.push(numeroSorteado)
                    }
                }
                break;
            case 'lotofácil':
                while (numberDrawn.length < inputNumbers.value) {
                    let numeroSorteado = Math.floor(Math.random() * 25) + 1
                    if (!numberDrawn.includes(numeroSorteado)) {
                        numberDrawn.push(numeroSorteado)
                    }
                }
                break;
            case 'lotomania':
                while (numberDrawn.length < inputNumbers.value) {
                    let numeroSorteado = Math.floor(Math.random() * 99)
                    if (!numberDrawn.includes(numeroSorteado)) {
                        numberDrawn.push(numeroSorteado)
                    }
                }
                break;
            default:
                break;
        }
    } else {
        window.alert('preencha os campos corretamente!')
    }

    numberDrawn.sort((a, b) => a - b)

    updateScren()
}

btn.addEventListener('click', generateNumbers)

function updateScren() {
    let results = document.getElementById('results')
    results.innerHTML = ""
    numberDrawn.forEach(item => {
        let divNumber = document.createElement('div')
        let textDivNumber = document.createTextNode(item.toString())
        divNumber.setAttribute('class', 'number')
        divNumber.appendChild(textDivNumber)
        results.appendChild(divNumber)
    })
}