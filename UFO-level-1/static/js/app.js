// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// table set-up
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});



// table filter
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#myForm");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    
    console.log(filteredData)

    // delete original table
    document.querySelectorAll("table tbody tr").forEach((row)=>{row.remove()})

    // create new table
    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
  };
