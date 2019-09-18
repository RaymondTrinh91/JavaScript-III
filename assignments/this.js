/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding targets the entire JS code thats in the window
* 2. Implicite Binding targets what is before the .
* 3. New Binding gives is the value we assign with the new keyword
* 4. Explicit Binding is the value we explicitly give it 
*
* write out a code example of each explanation above
*/

// Principle 1
let mcDonalds = function(){
    console.log(this.burger);
}

mcDonalds();
// code example for Window Binding

// Principle 2
const tacobell = {
    bestTaco: 'Cheddar Toasted Chalupa',
    whatsGood: function(){
        console.log(`${this.bestTaco} is the best item at Tacobell currently!`);
    }
}
tacobell.whatsGood();
// code example for Implicit Binding

// Principle 3
let Tacobeller = function(menuItem){
    this.menuItem = menuItem,
    this.best = 'is the Best!',
    this.tellMe = function(){
        console.log(`${this.menuItem} ${this.best}`)
    }
}
const chickenChalupa = new Tacobeller('Cheddar Toasted Chalupa');

chickenChalupa.tellMe();

// code example for New Binding

// Principle 4
let whatsGood1 = function(){
    console.log(`${this.bestTaco1} is the best item at Tacobell currently!`);
}
const tacobell1 = {
    bestTaco1: 'Cheddar Toasted Chalupa',
}

whatsGood1.call(tacobell1);
// code example for Explicit Binding