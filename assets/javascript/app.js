var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ahqx3ZZ65oFYw1Pjv8VHJLX7jnLscgfm&q=animals&limit=5&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });