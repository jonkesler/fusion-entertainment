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
     search.list() API call
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
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
function onSearchResponse(response) {
     var responseString = JSON.stringify(response, '', 2);
     document.getElementById('response').innerHTML = responseString;
    };
