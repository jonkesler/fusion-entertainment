var mArray = [];
var mResult = document.querySelector("#mResult");

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
             mResult.innerHTML = "";
            for (var l = 0; l < 5; l++) {
                var mTitle = (mArray.tracks.items[j].album.name);
                var mDesc = (mArray.tracks.items[j].album.release_date);
                var mrUrl = (mArray.tracks.items[j].href);
                console.log(mTitle + "mTitle");
                $(".m" + (l + 1)).html(mTitle);
                
            };
        })

}
                    

$("#run-search").on("click", function (event) {
    event.preventDefault();
    spotifySearch();
 })
