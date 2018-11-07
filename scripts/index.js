/* global shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();

  api.getItems(items => {
    console.log('in get items the first time');
    items.forEach(item => store.addItem(item));
    shoppingList.render();
  });
});
