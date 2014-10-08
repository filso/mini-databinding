// this is Observer
CountView.prototype = new Observer();
CountView.prototype.constructor = CountView;

function CountView(elem, list) {
  this.elem = elem;
  this.list = list;

  // register observer
  list.addObserver(this);

  this.update(); // initialise
}

CountView.prototype.update = function() {
  $('.count', this.elem).html(this.list.count());
};