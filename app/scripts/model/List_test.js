describe('List', function() {
  var list;

  beforeEach(function() {
    list = new List();
  });

  it('initialises with empty array', function() {
    expect(list.arr).toEqual([]);
  });

  it('removes items and notifies observers', function() {
    spyOn(list, 'notify');

    list.add('str1');
    expect(list.notify).toHaveBeenCalled();

    list.notify.reset();
    list.add('str2');
    expect(list.notify).toHaveBeenCalled();


    expect(list.arr[0]).toEqual('str1');
    expect(list.arr[1]).toEqual('str2');
  });

  it('adds items and notifies observers', function() {
    spyOn(list, 'notify');

    list.add('str1');
    list.add('str2');

    list.remove(0);
    expect(list.notify).toHaveBeenCalled();

    // removed the second one
    expect(list.arr[0]).toEqual('str2');
  });

  it('shows proper count', function() {
    list.add('str1');
    list.add('str2');
    expect(list.count()).toEqual(2);
  });

});