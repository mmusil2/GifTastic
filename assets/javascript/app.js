var topics = ["the simpsons", "family guy", "south park", "cowboy bebop"];

function displayGifs() {
    $("#gif-view").empty();

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ahqx3ZZ65oFYw1Pjv8VHJLX7jnLscgfm&q=" + topic + "&limit=10&offset=0&lang=en";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log(response.data[0].images.downsized_still.url);
            console.log(response.data[0].rating);          

            for (i=0; i < response.data.length; i++) {
                var gifDiv = $("<div class='gifs'>");

                var rating = response.data[i].rating;
                var ratep = $("<p>").text("Rating: " + rating);

                var stillurl = response.data[i].images.fixed_height_still.url;
                var still = $("<img class='gifimg'>").attr("src", stillurl);
                still.attr("data-url", stillurl);

                var gifurl = response.data[i].images.fixed_height.url;
                still.attr("data-gif", gifurl);

                still.attr("data-clicked", false);

                gifDiv.append(ratep);
                gifDiv.append(still);

                $("#gif-view").append(gifDiv);
            }

            $(".gifimg").on("click", function() {
                if ($(this).attr("data-clicked") == "false") {
                    console.log(this);
                    console.log($(this).attr("data-gif"));
                    giphy = $(this).attr("data-gif")
                    $(this).attr("src", giphy);
                    $(this).attr("data-clicked", true);
                } else {
                    stillimg = $(this).attr("data-url")
                    $(this).attr("src", stillimg);
                    $(this).attr("data-clicked", false);
                }
            });

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

$("#add-cartoon").on("click", function() {
    event.preventDefault();
    var cartoon = $("#cartoon-input").val().trim();
    topics.push(cartoon);
    renderButtons();
});

$(document).on("click", ".topic", displayGifs);
// $(document).on("click", ".gifs", console.log(this));

$(".gifs").on("click", function() {
    console.log(this);
    alert("Clicked");
});

renderButtons();