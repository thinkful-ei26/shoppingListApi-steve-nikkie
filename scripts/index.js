/* global shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();

  api.getItems(items => {
    console.log('in get items the first time');
    items.forEach(item => store.addItem(item));
    const item = items[0];
    api.updateItem(item.id, { name: 'erewrer', checked: true }, (updatedItem) => {
      store.findAndUpdate(item.id, updatedItem);
      console.log('updated!');
      shoppingList.render();
    });
  });

  // api.getItems((items) => {
  //   console.log('in get items the second time');
  //   const item = items[0];
  //   api.updateItem(item.id, { name: 'nik', checked: true }, () => {
  //     console.log('updated!');
  //   });
  //   shoppingList.render();
  // });
});
