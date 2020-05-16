<<<<<<< HEAD
var nResult = document.querySelector("#search-result");
var yapiKey = "AIzaSyDiFKZ__ewItVbTWGjSUu8AMCtowyAawyY"
var yArray = [];

// var search = document.querySelector("#search-input")


// function displayVideo(search) {
// console.log(insideDisplayVideo)
//     var queryURL = "https://www.googleapis.com/youtube/v3" + yapiKey;
//     console.log(queryURL);

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .then(function(response) {
//         console.log(response);
//    });
//   }
// // Call JavaScript client library for youtube
// // function onClientLoad() {
// //   console.log("loaded")
// //   gapi.client.setApiKey('AIzaSyDiFKZ__ewItVbTWGjSUu8AMCtowyAawyY');
// //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// // };
// // // Called automatically when YouTube API interface is loaded
// // function onYouTubeApiLoad() {
// //     gapi.client.setApiKey('AIzaSyDiFKZ__ewItVbTWGjSUu8AMCtowyAawyY');
// // };
// // Called when the search button is clicked in the html code
// function search() {
//     var query = document.getElementById('query').value;
//      search.list(yapiKey) 
//      var request = gapi.client.youtube.search.list({
//        part: 'snippet',
//        q:query
//     });
//   }
// function searchByKeyword() {
//   var query = document.getElementById('search-input').value;
//     var request = gapi.client.youtube.search.list('id,snippet', {q: query, maxResults: 15});
//     // for(var i in results.items) {
//     //   var item = results.items[i];
//     //   Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     // }

//   //   
//     // Send the request to the API server, call the onSearchResponse function when the data is returned
//     request.execute(onSearchResponse);
// };
// function onSearchResponse(response) {
//      var responseString = JSON.stringify(response, '', 2);
//      document.getElementById('response').innerHTML = responseString;
//     }

//     // calls the function search
$("#run-search").on("click", function (event) {
  event.preventDefault();
  console.log("click");
  var query = document.getElementById('search-input').value;
  console.log(query)
  const YOUTUBE_API_KEY = "AIzaSyDT1ZkdDlIXjPydNnmcu2-7okZn4tR7QHA";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&key=${YOUTUBE_API_KEY}`;
  console.log(url);
  fetch(url)
  // .then(response => response.json())
  .then(function(response) {


=======
// Call JavaScript client library for youtube
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDiFKZ__ewItVbTWGjSUu8AMCtowyAawyY');
}
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
nScript
    //  search.list() API call

     var request = gapi.client.youtube.search.list({
       part: 'snippet',
       q:query
    })
function searchByKeyword() {
    var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 15});
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
  }
    // .then(function(response) {
    //     console.log(response.json());
nScript
>>>>>>> master








    
  return response.json();
  })
  .then(function(response) {

  console.log(response)
  yArray = response;
  console.log(yArray)
  
    // .then(data) => {
   
    nResult.innerHTML = "";
    for (var j = 0; j < 4; j++) {
      var nTitle = (yArray.items[j].snippet.title);
      var nDesc = (yArray.items[j].snippet.description);
      // var nrUrl = (yArray.articles[j].url);
      console.log(nTitle + "nTitle");
      // console.log(nrUrl + " nrUrl");
      $(".n" + (j + 1)).html(nTitle);

      // document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    // };
    };
    })
  });