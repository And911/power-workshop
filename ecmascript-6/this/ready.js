var doc = {
  name: 'Bob',
  friends: ['Steve', 'John', 'Jim'],
  printFriends: function() {
    var $__0 = this;
    this.friends.forEach((function(friend) {
      return console.log($__0.name + ' knows ' + friend);
    }));
  }
};
doc.printFriends();
