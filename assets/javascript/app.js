var topics = ["the simpsons", "family guy", "south park", "cowboy bebop"];

function displayGifs() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ahqx3ZZ65oFYw1Pjv8VHJLX7jnLscgfm&q=" + topic + "&limit=5&offset=0&lang=en";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });
}

function renderButtons() {
    $("#buttons-view").empty();

    for (i=0; i < topics.length; i++) {
        var item = $("<button>");
        item.addClass("btn btn-info topic");
        item.attr("type", "button");
        item.attr("data-name", topics[i]);
        item.text(topics[i]);
        $("#buttons-view").append(item);
    }
}

$(document).on("click", ".topic", displayGifs);

renderButtons();