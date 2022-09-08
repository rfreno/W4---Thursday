
const residents = document.querySelector('#resBtn')
let resList = document.querySelector('#list')

const buttonFunction = () => {
    // console.log('button clicked')

    // Pseudocode for following axios request
    // axios request for Alderaan info
        // inside callback, loop over residents
            // make another get request for each URL
                // another .then with own callback
                    // create h2 element - content is the name of resident - append to HTML doc

    axios.get("https://swapi.dev/api/planets/2/")
        .then(planet => {
            const planetName = document.createElement('h2')
            planetName.textContent = planet.data.name
            resList.append(planetName)
            for (let i = 0; i < planet.data.residents.length; i++) {
                axios.get(planet.data.residents[i]).then(person => {
                    console.log(person.data)
                    const newPerson = document.createElement('h3')
                    newPerson.textContent = person.data.name
                    resList.append(newPerson)
                })
            }
        })
}

residents.addEventListener('click', buttonFunction)