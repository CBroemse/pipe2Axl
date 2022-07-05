const container = document.querySelector('#example4');  
const searchField = document.querySelector('#search_field4');
const resultCount = document.querySelector('#resultCount');

let searchResultCount = 0;

const data = [
  ['Tesla', 2017, 'black', 'black',123],
  ['Nissan', 2018, 'blue', 'blue'],
  ['Chrysler', 2019, 'yellow', 'black'],
  ['Pogo Volvo', 2020, 'white', 'gray']
  ];

// define your custom callback function
function searchResultCounter(instance, row, col, value, result) {
  const DEFAULT_CALLBACK = function(instance, row, col, data, testResult) {
    instance.getCellMeta(row, col).isSearchResult = testResult;
  };

  DEFAULT_CALLBACK.apply(this, arguments);

  if (result) {
    searchResultCount++;
  }
}


const hot4 = new Handsontable(container, {
  data,
  colHeaders: true,
  // enable the `Search` plugin
  search: {
    // add your custom callback function
    callback: searchResultCounter
  },
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation'
});


Handsontable.dom.addEvent(searchField, 'keyup', function(event) {
  searchResultCount = 0;

  const search = hot4.getPlugin('search');
  const queryResult = search.query(this.value);

  console.log(queryResult);
  resultCount.innerText = searchResultCount.toString();
  hot4.render();
});   