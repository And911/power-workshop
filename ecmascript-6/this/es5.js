
var doc = {
  name: 'Bob',
  friends: ['Steve', 'John', 'Jim'],
  printFriends: function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + ' knows ' + friend);
    });
  }
};

doc.printFriends();
