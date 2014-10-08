// this is Observer
ListView.prototype = new Observer();
ListView.prototype.constructor = ListView;

function ListView(elem, list) {
  this.elem = elem;
  this.list = list;

  // register observer
  list.addObserver(this);
}

// updates ListView
ListView.prototype.update = function() {
  var ul = $('ul');
  var _this = this;

  // first remove all li elements
  ul.empty();

  // add every element into DOM from scratch
  // better performance would be to update only changed
  this.list.arr.forEach(function(str, index) {
    var li = $('<li></li>');

    var button = $('<button>Delete</button>');
    button.click(function() {
      _this.remove(index);
    });

    li.append('<span>' + str + '</span>');
    li.append(button);

    ul.append(li);
  });

};

ListView.prototype.remove = function(index) {
  this.list.remove(index);
};