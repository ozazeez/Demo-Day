let partslist = []
let tanks = [smallTank, mediumTank, largeTank]
let filtration = []
let lighting = []
let rocks = []
let sand = []
let stand = []
let heater = []
let saltmix = []
let wavemaker = []
const Filter =
{
    name: 'AquaClear 110',
    description: 'Hang on back filter with ',
    dimensions: 'L: 36.5 IN W: 18.5 IN H: 16 IN',
    gph: '500 Gallons',
    small: true
}

const smallTank =
{
    name: 'Aqueon 40 Breeder',
    description: '40 Gallon Aquarium',
    dimensions: 'L: 36.5 IN W: 18.5 IN H: 16 IN',
    volume: '40 Gallons'
}

const mediumTank =
{
    name: 'Aqueon 75 Gallon',
    description: '40 Gallon Aquarium',
    dimensions: 'L: 48 IN W: 18 IN H: 23 IN',
    volume: '75 Gallons'
}

const largeTank =
{
    name: 'Aqueon 125 Gallon',
    description: '40 Gallon Aquarium',
    dimensions: 'L: 72.5 IN W: 18.5 IN H: 23.5 IN',
    volume: '125 Gallons'
}


// user is able to select what size tank they want to build with
// based on their tank size will be given options for their filter, lighting, heater, wavemaker.

// user is able to save their selctions as a list 
    // this list is name build#1
    // this list is modifiable

// 