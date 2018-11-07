/* global cuid */

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steve-nikki';

  const getItems = function(callback) {
    $.ajax({
      url: BASE_URL + '/items',
      method: 'GET',
      contentType: 'application/json',
      success: response => {
        console.log(response);
      }
    });
  };
  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      name: name
    });
    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: response => {
        console.log(response);
      }
    });
  };

  return {
    getItems,
    createItem
  };
})();
