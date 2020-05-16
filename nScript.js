var nAPIkey = "80d515d314d8402bb02b5d41c84b4972";

var today = new Date();
var date = +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var search = 12;
// number of results from localStorage
var searchCount = 8;
// number of results from rArray
var nCount = 5;
// search input
// var iText = "";
// tim had breana add .value
var searchInput = document.querySelector("#search-input");
var pSearches = document.querySelectorAll("#past-searches"); 
var nIcon = document.querySelector("#search-input");
var nResult = document.querySelector("#nResult");
// local storage
var qInput = localStorage.getItem("queryInput");
// set href
// var a = document.getElementById('yourlinkId');
// Search Input Array
var sInput = [];
// Results Array
var rArray = [];

// calls local storage
init();

function renderLastSearches(){
  // Clear search-list element and update past searches
   pSearches.innerHTML = "";
    console.log("renderLastSearches");
  // Render a past tag for each searched term
  for (var i = 0; i < searchCount; i++) {
    var lSearch = sInput[i];
    console.log(lSearch + "lSearch");

    // $("panel-icon").html("<svg><use xlink:href="#delete"></use></svg>");
        // $("panel-icon").innerHTML("<i class="far fa-newspaper" aria-hidden="true"></i>");
    // .iClass('fa-angle-right');

    $(".past" + (i + 1)).html(lSearch);
    
    // i.setAttribute("class", "far fa-newspaper");
    // panelBlock.appendChild();
  }
}


// Set files to HTML - first called 
// ============================================
function init() {
    // Get stored input from localStorage
    // Parsing the JSON string to an object
    var storedInput = JSON.parse(localStorage.getItem("sInput"));
  
    // If search terms were retrieved from localStorage, update the todos array to it
    if (storedInput !== null) {
      sInput = storedInput;
    }
    // Render Input to the DOM
    renderLastSearches();
  }
  
  

  function buildQueryURL() {
    
    // keyword api search
    // ============================================
    // added n to url because it seemed to effect url in rscript
        var nUrl = 'https://newsapi.org/v2/everything?' +
        // populate q with search term
        'q=' + searchInput.value + '&' +
        // populate from with current month
        'from=' + date + '&' +
        // sorts by popularity
        'sortBy=popularity&' +
        'apiKey=' + nAPIkey;

        var req = new Request(nUrl);

        fetch(nUrl)
        .then(function(response){
        return response.json();
        })
        .then(function(response) {
          nArray = response;
          console.log("nArray",nArray.articles[1].title);
// ***not working.  Something to do with promise
          console.log(nArray , "nArray");
        })

        .then(function() {
  
          console.log(nUrl +"url");
          // console.log(response);
          console.log(sInput + " sInput API");
        //   console.log("searchInput " + searchInput);
//   writing to HTML
        // creates panel and lists results
        // ============================================
        nResult.innerHTML = "";
        // #nsearch-result.innerHTML = "";
        for (var j = 0; j < nCount; j++) {
          var nTitle = (nArray.articles[j].title);
          var nDesc = (nArray.articles[j].description);
          var nrUrl = (nArray.articles[j].url);
          console.log(nTitle + "nTitle");
          console.log(nrUrl + " nrUrl");
          // console.log("===============");
          // $("panel-icon").html("<svg><use xlink:href="#delete"></use></svg>");
          // .iClass('fa-angle-right');
          // iClass.appendChild("<i class="fa-angle-right" aria-hidden="true"></i>");
      
          $(".n" + (j + 1)).html(nTitle);
          // $(".n" + (j + 1)).attr(hfref, nrUrl);
          // $(".n" + (j + 1)).html(nDesc);
          // $(".n" + (j + 1)).html(nrUrl);
          // var p2 = "<p>paragraph 2</p>";
          // $(p2).insertAfter(".n" + (j + 1));


// trying to add more details to search results
        //   var letterBtn = $("<button>");
        // // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        // letterBtn.addClass("letter-button letter letter-button-color");

        // // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        // letterBtn.attr("data-letter", letters[i]);

        // // 5. Then give each "letterBtns" a text equal to "letters[i]".
        // letterBtn.text(letters[i]);

        // // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        // $("#buttons").append(letterBtn);


 // add url 
          // $(".n" + (j + 1)).setAttribute("a href", "nrUrl");
          // document.getElementById((".n" + (j + 1))).href = "nrUrl";
          // $(".n" + (j + 1).sourceText).append('<i class="fa-angle-right" aria-hidden="true"></i>');
          // $(".n" + (j + 1)).html(nrUrl);
  };
})
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
    // var  iValue = searchInput;
    if (iValue === ""){
      return;
    }
    sInput.unshift(iValue);
    console.log(searchInput.value + " searchInput");
    searchInput.value = "";
  
    storeInput();
    renderLastSearches();
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
