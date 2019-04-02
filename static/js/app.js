// from data.js
var tableData = data;

// Create a function to insert a row and the cells in the html table
function addRow(element) {

    // Get a reference to the table
    var table = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];

    // Get the count of the cells to iterate and add values 
    cellCount = document.getElementById('ufo-table').rows[0].cells.length;

    // Create a array of values from the object 'element'     
    values = Object.values(element);

    // Insert a row at the end of the table by using -1 index
    var newRow = table.insertRow(-1);

    // Insert cells iterating over values array for the length of header cells 
    for(i = 0; i < cellCount; i++) {
                        
        // Insert a cell in the row at index i
        var newCell = newRow.insertCell(i);

        // Append a text node to the cell with value at index i 
        var newText = document.createTextNode(values[i]);
        newCell.appendChild(newText);
    };

  };

// Iterate over each obj from the data array to insert a row in html table
tableData.forEach(obj => addRow(obj));

// Add functionality to filter the data based on user input 
// Listen for the user events to filter the data table 
var button = document.getElementById('filter-btn');

button.addEventListener("click", function (e) {

    // Prevent the button from reloading the page by default
    e.preventDefault();

    // Let's get the input value from the input box 
    var dateInput = document.getElementById('datetime').value;

    // Get the list of all dates
    allDates = tableData.map(obj => obj.datetime);

    // Check if the entered date is in the list of dates then filter else load the original content
    if (allDates.includes(dateInput)) {
        // Add condition to filter the table 
        var filteredData = tableData.filter(element => element.datetime === dateInput);

        // Clear the table on the page
        // Get a reference to the table
        var table = document.getElementById('ufo-table');
        
        // Remove the table body
        table.children[1].remove();

        // Add the tbody element again
        var tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // Call the addRow function to insert the filtered data in the table 
        filteredData.forEach(obj => addRow(obj));

    } else {
        tableData.forEach(obj => addRow(obj));
    };

});
