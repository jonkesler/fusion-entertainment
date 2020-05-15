var mArray = [];
var nResult = document.querySelector("#search-result");

function spotifySearch() {
    var AUTH_TOKEN = "BQAY6_FOenKpwY35ZUxVlp7LpVvcEthGQWDjlC2dWzjtkk5feZ8WUNOPLHHKPvfd9hOEFiUKzYVrWZxUBVoVrVAlniKnVFKQUvM0t-h2Anvs6eo1kZHazJ1VCgRYWmPKnNA1mWs09wKypI08NQ";
    var searchTerm = "search-input"
    var searchType = "track"
    var queryUrl = "https://api.spotify.com/v1/search?q=" + searchTerm.value + "&type=" + searchType;
    
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + AUTH_TOKEN
        }
    })
         .then(function (response) {
           console.log(response)
           mArray = response;
            console.log(mArray + "mArray");
            console.log(mArray.tracks.items[1].href);
            console.log(mArray.tracks.items[1].album.release_date);
        
            // Writes results to html
             nResult.innerHTML = "";
            for (var j = 0; j < 4; j++) {
                var nTitle = (mArray.tracks.items[j].album.name);
                var nDesc = (mArray.tracks.items[j].album.release_date);
                var nrUrl = (mArray.tracks.items[j].href);
                console.log(nTitle + "nTitle");
                $(".n" + (j + 1)).html(nTitle);
                
            };
        })

}
                    

$("#run-search").on("click", function (event) {
    event.preventDefault();
    spotifySearch();
 })
