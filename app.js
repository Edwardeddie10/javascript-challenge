// from data.js
var tableData = data;


// Select the text of an HTML element
var tbody = d3.select("tbody");

// UFO sightings
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    console.log("tbody says: ", tbody);
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      console.log("row says: ", row);
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        console.log("cell says: ", cell);
        cell.html(value);
      });
    });
  };

// btn filter
    var button = d3.select("#filter-btn");

// filter doc based on date/time
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

// filtered based by data
filteredData.forEach((dateData) => {
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });

 //database
 console.log(filteredData);
 tableDisplay(filteredData);
});    


