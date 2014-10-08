// this is Subject - observable
List.prototype = new Subject();
List.prototype.constructor = List;

// this is simple observable wrapper around array
function List() {
  this.arr = [];
}

List.prototype.remove = function(index) {
  this.arr.splice(index, 1);
  this.notify(); // notify observers of change
};

List.prototype.add = function(str) {
  this.arr.push(str);
  this.notify(); // notify observers of change
};

List.prototype.count = function() {
  return this.arr.length;
};



