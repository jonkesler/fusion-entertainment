var vResult = document.querySelector("#vResult");
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
  return response.json();
  })
  .then(function(response) {

  console.log(response)
  yArray = response;
  console.log(yArray)
  
    // .then(data) => {
   
    vResult.innerHTML = "";
    for (var k = 0; k < 5; k++) {
      var vTitle = (yArray.items[k].snippet.title);
      var vDesc = (yArray.items[k].snippet.description);
      // var nrUrl = (yArray.articles[j].url);
      console.log(vTitle + "vTitle");
      // console.log(nrUrl + " nrUrl");
      $(".v" + (k + 1)).html(vTitle);

      // document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    // };
    };
    })
  });