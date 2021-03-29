class Alligator {
    constructor(
        name = 'Jay',
        color = 'Blue',
        gender = 'M',
        weight = 2,
        tailLengthInch = 10,
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Alligator;