function ListCtrl(addElem, listElem, countElem) {
  
  var list = new List();

  var addView = new AddView(addElem, list);
  var listView = new ListView(listElem, list);
  var countView = new CountView(countElem, list);

  list.add('Carrots');
  list.add('Pears');

}

