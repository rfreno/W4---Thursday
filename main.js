
const alderaan = document.querySelector('#resBtn')
const tatooine = document.querySelector('#tatBtn')
const endor = document.querySelector('#enBtn')
const naboo = document.querySelector('#nabBtn')
const coruscant = document.querySelector('#corBtn')
let resList = document.querySelector('#list')
let planetIndex = 0

const clearPage = () => {
    resList.innerHTML = ``
}

const buttonFunction = btnClicked => {
    clearPage()

    if (btnClicked === 'alderaan') {
        planetIndex = 2
    } else if (btnClicked === 'tatooine') {
        planetIndex = 1
    } else if (btnClicked === 'endor') {
        planetIndex = 7
    } else if (btnClicked === 'naboo') {
        planetIndex = 8
    } else if (btnClicked === 'coruscant') {
        planetIndex = 9
    }
    

    axios.get(`https://swapi.dev/api/planets/${planetIndex}`)
        .then(planet => {
            const planetName = document.createElement('h2')
            planetName.textContent = planet.data.name
            resList.append(planetName)
            console.log(planetName)
            for (let i = 0; i < planet.data.residents.length; i++) {
                axios.get(planet.data.residents[i]).then(person => {
                    const newPerson = document.createElement('h3')
                    newPerson.textContent = person.data.name
                    resList.append(newPerson)
                })
            }
        })
}


alderaan.addEventListener('click',() => buttonFunction('alderaan'))
tatooine.addEventListener('click',() => buttonFunction('tatooine'))
endor.addEventListener('click',() => buttonFunction('endor'))
naboo.addEventListener('click',() => buttonFunction('naboo'))
coruscant.addEventListener('click',() => buttonFunction('coruscant'))
