document.getElementById("changeColorBtn").addEventListener("click", function() {
  toggleMenu();
});

// Function to toggle the menu
function toggleMenu() {
  var menu = document.getElementById("destinationMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Add event listeners to destination links
var destinationLinks = document.querySelectorAll("#destinationMenu a");
destinationLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      var destination = event.target.textContent; // Get the destination text
      getInfoFromWikipedia(destination); // Call function to get information from Wikipedia
  });
});

// Function to get information from Wikipedia
function getInfoFromWikipedia(destination) {
  // Construct the Wikipedia API URL for the destination
  var apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=" + destination.replace(" ", "_");

  // Make a request to the Wikipedia API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Extract the page content from the API response
          var pages = data.query.pages;
          var pageId = Object.keys(pages)[0];
          var extract = pages[pageId].extract;

          // Display the extracted information
          alert(extract);
      })
      .catch(error => {
          console.log("Error fetching data from Wikipedia:", error);
      });
}

// Function to redirect to the Wikipedia page for Mexico City
function redirectToMexicoCity() {
  window.location.href = "https://el.wikipedia.org/wiki/%CE%A0%CF%8C%CE%BB%CE%B7_%CF%84%CE%BF%CF%85_%CE%9C%CE%B5%CE%BE%CE%B9%CE%BA%CE%BF%CF%8D";
}

// Function to redirect to the Wikipedia page for Barcelona
function redirectToBarcelona() {
  window.location.href = "https://el.wikipedia.org/wiki/%CE%92%CE%B1%CF%81%CE%BA%CE%B5%CE%BB%CF%8E%CE%BD%CE%B7";
}

// Function to redirect to the Wikipedia page for Italy
function redirectToItaly() {
  window.location.href = "https://en.wikipedia.org/wiki/Tourism_in_Italy";
}
