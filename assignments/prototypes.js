/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(object){
  this.createdAt = object.createdAt;
  this.name = object.name;
  this.dimensions = object.dimensions;  
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats){
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(char){
  CharacterStats.call(this, char);
  this.team = char.team;
  this.weapons = char.weapons;
  this.language = char.language;  
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
} 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
function Hero(hero){
    Humanoid.call (this, hero);
    this.blessing = hero.blessing;
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(){
    let dmg = Math.floor(Math.random() * (7 - 1) + 1);
    let eHp = demonLord.healthPoints;
    let sHp = eHp - dmg;
    if (sHp <= 0){
        return demonLord.destroy();
    }
    demonLord.healthPoints = sHp;
    console.log(demonLord.healthPoints)
    return demonLord.takeDamage();
};

Hero.prototype.holyStrike = function(){
    let holyDmg = Math.floor(Math.random() * (15 - 3) + 3);
    let eHp = demonLord.healthPoints;
    let sHp = eHp - holyDmg;
    if (sHp <= 0){
        return demonLord.destroy();
    }
    demonLord.healthPoints = sHp;
    console.log(demonLord.healthPoints)
    return demonLord.takeDamage();
};

Hero.prototype.holyShield = function(){
    heroOfLegend.healthPoints += 50;
    console.log(heroOfLegend.healthPoints);
    return `A Shield of Light wraps around ${heroOfLegend.name}`;
}

function Villian(badGuy){
    Humanoid.call (this, badGuy);
    this.curse = badGuy.curse;
}
Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.punch = function(){
    let dmg = Math.floor(Math.random() * (1000 - 800) + 800);
    console.log(dmg)
    let eHp = heroOfLegend.healthPoints;
    let sHp = eHp - dmg;
    if (sHp <= 0){
        return heroOfLegend.destroy();
    }
    heroOfLegend.healthPoints = sHp;
    console.log(heroOfLegend.healthPoints)
    return heroOfLegend.takeDamage();
}

const heroOfLegend = new Hero({
    createdAt: new Date(),
    dimensions:{
    length:2,
    width:2,
    height:2,
    },
    healthPoints:35,
    name: 'Mars',
    team: 'Justice',
    weapons:[
    'Icecaliberg',
    'Ceaser\'s Shal\'d', 
    ],
    language: 'Common Tongue',
    blessing: 'Blessed by Fairies',
});

const demonLord = new Villian({
    createdAt: new Date(),
    dimensions:{
    length: 4,
    width: 3,
    height: 5,
    },
    healthPoints: 50,
    name: 'Bob',
    team: 'Team Bob',
    weapons: [
    'Left Fist',
    'Right Fist',
    ],
    language: 'English',
    curse: 'Where am I? How did I get here?',
});
  
console.log(heroOfLegend.attack());
console.log(heroOfLegend.holyStrike());
console.log(heroOfLegend.holyShield());
console.log(heroOfLegend.holyStrike());
console.log(demonLord.punch());

