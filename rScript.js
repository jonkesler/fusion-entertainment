// random News api call-called on page load
// ============================================
var rnUrl = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=' + nAPIkey;
var req = new Request(rnUrl);
    fetch(req)
    .then(function(response){
      return response.json();
      })
    .then(function(response) {
      rnArray = response;
      console.log("rnArray",response);
      // console.log(rnArray[1]);
  })
  // articles
  // articles[0]
  // articles[0].content




// new test
const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
const YOUTUBE_API_KEY = "AIzaSyDT1ZkdDlIXjPydNnmcu2-7okZn4tR7QHA";
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;
console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.items[0].id.videoId);
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});

