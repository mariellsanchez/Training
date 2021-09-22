    
const type = {
	FIRE: "fire",
	WATER: "water",
	GRASS: "grass",
	ELECTRIC: "electric",
}

const effectiveness = {
    SUPER: 2,
    NEUTRAL: 1,
    NOT_VERY: 0.5,
}

var effectiveness_calculator = {
    fire : {
      fire : effectiveness.NOT_VERY,
      grass : effectiveness.SUPER,
      water : effectiveness.NOT_VERY,
      electric : effectiveness.NEUTRAL
    },
    grass : {
      fire : effectiveness.NOT_VERY,
      grass : effectiveness.NOT_VERY,
      water : effectiveness.SUPER,
      electric : effectiveness.NEUTRAL
    },
    water : {
      fire : effectiveness.SUPER,
      grass : effectiveness.NOT_VERY,
      water : effectiveness.NOT_VERY,
      electric : effectiveness.NOT_VERY
    },
    electric : {
      fire : effectiveness.NEUTRAL,
      grass : effectiveness.NEUTRAL,
      water : effectiveness.SUPER,
      electric : effectiveness.NOT_VERY
    }
};

function Pokemon(name, type, attack, defense) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
}

function damage_calculator(pokemon1, pokemon2){
    return Math.ceil(50 * (pokemon1.attack/pokemon2.defense) * effectiveness_calculator[pokemon1.type][pokemon2.type]);
}

/*var pok = new Pokemon("pinky", type.FIRE, 50, 63)

function damage(attack, defense, effectiveness){
    return  50 * (attack / defense) * effectiveness;
}

console.log("hate pokemon");

function damage_calculator(yourType, opponentType, attack, defense){
    return Math.ceil(50 * (attack/defense) * effects[yourType][opponentType]);
}
*/

var pinky = new Pokemon("Pinky", type.FIRE, 100, 10);
var blueish = new Pokemon("Blueish", type.WATER, 100, 50);
var purple = new Pokemon("Purple", type.ELECTRIC, 80, 60);
var greenish = new Pokemon("Greenish", type.ELECTRIC, 180, 20);

console.log("\n\n - - - - - - - -  TESTING - - - - - - - - \n") 
console.log( "Damage calculator with " + pinky.name + " and " + blueish.name + " is " + damage_calculator( pinky,  blueish) + " damage. \n" );
console.log( "Damage calculator with " + blueish.name + " and " + pinky.name + " is " + damage_calculator( blueish,  pinky) + " damage.\n" );
console.log( "Damage calculator with " + pinky.name + " and " + pinky.name + " is " + damage_calculator( pinky,  pinky) + " damage. \n" );
console.log( "Damage calculator with " + purple.name + " and " + greenish.name + " is " + damage_calculator( purple,  greenish) + " damage. \n" );
console.log( "Damage calculator with " + greenish.name + " and " + blueish.name + " is " + damage_calculator( greenish,  blueish) + " damage. \n" );
console.log( "Damage calculator with " + pinky.name + " and " + purple.name + " is " + damage_calculator( pinky,  purple) + " damage. \n" );
console.log()