var APIkey = "80d515d314d8402bb02b5d41c84b4972";

var today = new Date();
var date = +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var search = 12;
var searchCount = 12;
var searchInput = document.querySelector("#search-input");
var qInput = localStorage.getItem("queryInput");

var sInput = [];

// random api call
// ============================================
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
        //   'apiKey=80d515d314d8402bb02b5d41c84b4972';
          'apiKey=' + APIkey;
var req = new Request(url);
    fetch(req)
    .then(function(response) {
    console.log(response.json());
    })


    function renderLastSearches(){
        // Clear search-list element and update todoCountSpan
    //    pastSearches.innerHTML = "";
       
        // Render a new ul for each searched city
       for (var i = 0; i < searchCount; i++) {
         var lSearch = sInput[i];
         console.log(lSearch + " lSearch");
         var a = document.createElement("a");
         a.textContent = lSearch;
         a.setAttribute("data-index", i);
         a.setAttribute("class", "panel-block");
     
     
         // li.appendChild(button);
         searchList.appendChild(a);
         // console.log("qCity" + qCity);
       }
     }

// Set files to HTML
// ============================================
function init() {
    // Get stored input from localStorage
    // Parsing the JSON string to an object
    var storedInput = JSON.parse(localStorage.getItem("searchInput"));
  
    // If searchs were retrieved from localStorage, update the todos array to it
    if (storedInput !== null) {
      sInput = storedInput;
    }
  console.log(sInput + "sInput")
    // Render Input to the DOM
    renderLastSearches();
  }
  
  

  function buildQueryURL() {
    
    // keyword api search
    // ============================================
        var url = 'http://newsapi.org/v2/everything?' +
        // populate q with search term
        'q=' + searchInput + '&' +
        // populate from with current month
        'from=' + date + '&' +
        // sorts by popularity
        'sortBy=popularity&' +
        // 'apiKey=80d515d314d8402bb02b5d41c84b4972';
        'apiKey=' + APIkey;

        var req = new Request(url);

        fetch(req)
        .then(function(response) {
        console.log(response.json() + " Json Response");
        })

        .then(function(response) {
  
          console.log(url);
        //   console.log(response.json() + "response");
          console.log(sInput + " sInput");
        //   console.log("searchInput " + searchInput);
//   writing to HTML

  });
}
  // Store search Input
  function storeInput(){
    localStorage.setItem("sInput", JSON.stringify(sInput));
  }
  
  // CLICK HANDLERS
  // ==========================================================
  
  // .on("click") function associated with the Search Button
// ******Need to figure out the ID for the search
  $("#run-search").on("click", function(event) {
    event.preventDefault();
    console.log("Click");
    // Build the query URL
    var queryURL = buildQueryURL();
//    makes sure search is not blank
    var  iValue = searchInput.value;
    if (iValue === ""){
      return;
    }
    sInput.unshift(iValue);
    searchInput.value = "";
  
    storeInput();
    // renderLastInput();
  })
  

//   needs work
//   document.getElementById("search-list").addEventListener("click",function(e) {
//     // e.target is our targetted element.
//     // try doing console.log(e.target.nodeName), it will result LI
//     if(e.target && e.target.nodeName == "LI") {
//         console.log(e.target.id + " was clicked");
    // }
//   });
//   }