function Animal(go, run, sleep, haveWool) {
    this.go = go;
    this.run = run;
    this.sleep = sleep;
    this.haveWool = haveWool;
}
Animal.prototype.eat = function () {
    console.log(`Animal can sleep`);
}
Animal.prototype.canGo = function () {
    console.log(`Animal can go`);
}
Animal.prototype.wool = function () {
    if (this.haveWool == true) {
        console.log(`Animal with wool`);
    } else {
        console.log(`Animal without wool`);
    };
}

function constructor(classChild, classParent) {
    classChild.prototype = Object.create(classParent.prototype);
    classChild.prototype.constructor = classChild;
}

function Herbivorous(go, run, sleep, haveWool, eatHerb) {
    Animal.call(this, go, run, sleep, haveWool);
    this.eatHerb = eatHerb;
}
constructor(Herbivorous, Animal);
Herbivorous.prototype.eatPlants = function () {
    console.log('Herbivorous eats herbs');
}

function Predator(go, run, sleep, haveWool, eatAnotherAnimals) {
    Animal.call(this, go, run, sleep, haveWool);
    this.eatAnotherAnimals = eatAnotherAnimals;
}
constructor(Predator, Animal);
Predator.prototype.eatOtherAnimals = function () {
    console.log('Predator eats another animals');
}

function Cow(go, run, sleep, haveWool, eatHerb, giveMilk) {
    Herbivorous.call(this, go, run, sleep, haveWool, eatHerb);
    this.giveMilk = giveMilk;
}
constructor(Cow, Herbivorous);
Cow.prototype.milk = function () {
    console.log('Cow gives milk');
}

function Sheep(go, run, sleep, haveWool, eatHerb, giveWool) {
    Herbivorous.call(this, go, run, sleep, haveWool, eatHerb);
    this.giveWool = giveWool;
}
constructor(Sheep, Herbivorous);
Sheep.prototype.sheepGiveWool = function () {
    console.log('Sheep gives wool');
}

function GreatWhiteShark(go, run, sleep, haveWool, eatAnotherAnimals, isFish) {
    Predator.call(this, go, run, sleep, haveWool, eatAnotherAnimals);
    this.isFish = isFish
}
constructor(GreatWhiteShark, Predator);
GreatWhiteShark.prototype.lifeTime = function () {
    console.log('Great whites can live up to 70 years old');
}

function Crocodile(go, run, sleep, haveWool, eatAnotherAnimals, isReptile) {
    Predator.call(this, go, run, sleep, haveWool, eatAnotherAnimals);
    this.isReptile = isReptile
}
constructor(Crocodile, Predator);
Crocodile.prototype.heartType = function () {
    console.log(`A crocodile has a four-chambered heart like humans`);
}


let cow = new Cow(true, true, true, false, true, true);
console.log(cow);
cow.eat();
cow.canGo();
cow.wool();
cow.eatPlants()
cow.milk();
console.log(`-----------------`);
let sheep = new Sheep(true, true, true, true, true, true);
console.log(sheep);
sheep.eat();
sheep.canGo();
sheep.wool();
sheep.eatPlants()
sheep.sheepGiveWool()
console.log(`-----------------`);
let greatWhiteShark = new GreatWhiteShark(false, false, true, false, true, true);
console.log(greatWhiteShark);
greatWhiteShark.eat();
greatWhiteShark.canGo();
greatWhiteShark.wool();
greatWhiteShark.eatOtherAnimals()
greatWhiteShark.lifeTime();
console.log(`-----------------`);
let crocodile = new Crocodile(true, true, true, false, true, true);
console.log(crocodile);
crocodile.eat();
crocodile.canGo();
crocodile.wool();
crocodile.heartType()