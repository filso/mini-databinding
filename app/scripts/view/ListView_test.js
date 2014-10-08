describe('ListView', function() {
  var listView, elem, list;

  beforeEach(function() {
    // these are mocks - testing ListView implementation only
    elem = jasmine.createSpyObj('elem', ['']);
    list = jasmine.createSpyObj('list', ['addObserver', 'remove']);

    setFixtures('<ul></ul>');

    listView = new ListView(elem, list);
  });

  it('initialises properly', function() {
    expect(list.addObserver).toHaveBeenCalledWith(listView);
  });

  it('updates view properly', function() {
    list.arr = ['str1', 'str2'];
    listView.update();

    var ul = $('ul');
    expect($('li', ul).length).toEqual(2);

    expect($('ul').html()).toEqual('<li><span>str1</span><button>Delete</button></li><li><span>str2</span><button>Delete</button></li>');
  });

  it('removes element from list', function() {
    var index = 3;

    listView.remove(index);
    expect(list.remove).toHaveBeenCalledWith(index);

  });

});