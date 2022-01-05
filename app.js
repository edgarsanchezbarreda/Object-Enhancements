// Same keys and vals
function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// Computed Property Names
let favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber] : 'That is my favorite'
}

// Object Methods
let instructor = {
    firstName : 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
}

// createAnimal Function
function createAnimal (species, verb, noise) {
    return {
    species,
    [verb] () {
        return noise;
    } 
  }
}