function AddView(elem, list) {
  this.elem = elem;
  this.list = list;

  var _this = this;
  $('button', elem).click(function() {
    var input = $('input', _this.elem);
    _this.list.add(input.val());
    input.val('');
  });
}
