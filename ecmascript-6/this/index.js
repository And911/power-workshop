
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script index.js

var doc = {
  name: 'Bob',
  friends: ['Steve', 'John', 'Jim'],
  printFriends() {
    this.friends.forEach(friend =>
      console.log(this.name + ' knows ' + friend));
  }
};

doc.printFriends();
