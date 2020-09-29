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
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var textDate = inputDate.property("value").trim().toLowerCase();
    var textCity = inputCity.property("value").trim().toLowerCase();
    var textState = inputState.property("value").trim().toLowerCase();
    var textCountry = inputCountry.property("value").trim().toLowerCase();
    var textShape = inputShape.property("value").trim().toLowerCase();

    // Single category search only
    if (textDate != ""){var filteredData = tableData.filter(data => data.datetime === textDate);}
    else if (textCity != ""){var filteredData = tableData.filter(data => data.city === textCity);}
    else if (textState != ""){var filteredData = tableData.filter(data => data.state === textState);}
    else if (textCountry != ""){var filteredData = tableData.filter(data => data.country === textCountry);}
    else if (textShape != ""){var filteredData = tableData.filter(data => data.shape === textShape);}
    else {var filteredData = tableData}
    
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
